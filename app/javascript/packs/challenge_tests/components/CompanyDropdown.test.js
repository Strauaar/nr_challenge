import React from 'react';
import CompanyDropdown from '../../challenge/components/CompanyDropdown';
import * as Api from '../../challenge/utils/api_util';
import { mount, shallow, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

configure({ adapter: new Adapter() });
const mock = new MockAdapter(axios);
mock.onGet('/api/companies').reply(200, {
    data: [{id: 1, name: "Company"}]
});

describe('CompanyDropdown Component', () => {
    test('updates company props', () => {
        let setParam = jest.fn()
        CompanyDropdown.prototype.setState = jest.fn()
        const wrapper = mount(<CompanyDropdown setParam={setParam}/>);
        wrapper.setProps({ company: 'new company' });
        expect(wrapper.props().company).toEqual('new company')
    });
    
    test('calls handleSelect() when option is selected', () => {
        let setParam = () => {}
        const handleChangeSpy = sinon.spy(CompanyDropdown.prototype, "handleSelect");
        const event = {target: { value: "Another Company" }};
        const wrapper = shallow(<CompanyDropdown setParam={setParam} />)
        wrapper.find('select').simulate('change', event);
        expect(handleChangeSpy.calledOnce).toEqual(true);
    })

    test('calls Api.fetchCompanies() on componentDidMount', () => {
        let setParam = () => {}
        const handleChangeSpy = sinon.spy(Api, "fetchCompanies");
        const wrapper = shallow(<CompanyDropdown setParam={setParam} />)
        expect(handleChangeSpy.calledOnce).toEqual(true);
    })
})