import React from 'react';
import App, { App as AppWithoutRouter } from '../../challenge/components/App';
import qs from 'query-string';
import { mount, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component', () => {
    describe('componentDidMount', () => {
        test('calls fetchCustomers()', () => {
            const handleChangeSpy = sinon.spy(AppWithoutRouter.prototype, "fetchCustomers");
            const wrapper = mount(<AppWithoutRouter />)
            expect(handleChangeSpy.calledOnce).toEqual(true);
            AppWithoutRouter.prototype.fetchCustomers.restore()
        })

        test('if no query string, set default state and fetch default customers', () => {
            const handleChangeSpy = sinon.spy(AppWithoutRouter.prototype, "fetchCustomers");
            let query = {filter: undefined, company: undefined, customer: undefined}
            const wrapper = mount(<AppWithoutRouter />)
            expect(wrapper.state().query).toEqual(query);
            expect(handleChangeSpy.calledWith(query)).toEqual(true);
            AppWithoutRouter.prototype.fetchCustomers.restore()            
        })
    })
})