import React from 'react';
import App, { App as AppWithoutRouter } from '../../challenge/components/App';
import qs from 'query-string';
import { StaticRouter, withRouter } from 'react-router-dom';
import { mount, configure, shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import jsdom from 'jsdom';

configure({ adapter: new Adapter() });
const mock = new MockAdapter(axios);
mock.onGet('/api/customers').reply(200, {
    customers: []
});

describe('App Component', () => {
    describe('componentDidMount', () => {
        test('calls fetchCustomers()', () => {
            const handleChangeSpy = sinon.spy(AppWithoutRouter.prototype, "fetchCustomers");
            const wrapper = shallow(<AppWithoutRouter />)
            expect(handleChangeSpy.calledOnce).toEqual(true);
            AppWithoutRouter.prototype.fetchCustomers.restore()
        })

        test('if no query string, set default state and fetch default customers', () => {
            const handleChangeSpy = sinon.spy(AppWithoutRouter.prototype, "fetchCustomers");
            let query = {filter: undefined, company: undefined, customer: undefined}
            const wrapper = shallow(<AppWithoutRouter />)
            expect(wrapper.state().query).toEqual(query);
            expect(handleChangeSpy.calledWith(query)).toEqual(true);
            AppWithoutRouter.prototype.fetchCustomers.restore()            
        })
    })

    describe('calling setParams', () => {
        test('calls setUrl to update query string', () => {
            const wrapper = shallow(<AppWithoutRouter />)
            wrapper.instance().setUrl = jest.fn();
            wrapper.update();
            wrapper.instance().setParam('customer', 'Aaron')
            expect(wrapper.instance().setUrl).toBeCalledWith({ company: undefined, filter: undefined, customer: 'Aaron' });
        })

        test('calls setState to re-render components', () => {
            const wrapper = shallow(<AppWithoutRouter />)
            wrapper.instance().setState = jest.fn();
            wrapper.instance().setUrl = jest.fn();
            wrapper.update();
            wrapper.instance().setParam('customer', 'Aaron')
            expect(wrapper.instance().setState).toBeCalledWith({query: { company: undefined, filter: undefined, customer: 'Aaron' }});
        })

        test('calls fetchCustomers to retrieve data', () => {
            const wrapper = shallow(<AppWithoutRouter />)
            wrapper.instance().setState = jest.fn();
            wrapper.instance().setUrl = jest.fn();
            wrapper.instance().fetchCustomers = jest.fn();
            wrapper.update();
            wrapper.instance().setParam('customer', 'Aaron')
            expect(wrapper.instance().fetchCustomers).toBeCalledWith({ company: undefined, filter: undefined, customer: 'Aaron' });
        })
    })
})