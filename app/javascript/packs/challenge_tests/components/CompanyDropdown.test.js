import React from 'react';
import CompanyDropdown from '../../challenge/components/CompanyDropdown';
import * as Api from '../../challenge/utils/api_util';
import { mount, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('CompanyDropdown Component', () => {

    test('updates company props', () => {
        let setParam = () => {}
        const wrapper = mount(<CompanyDropdown setParam={setParam}/>);
        wrapper.setProps({ company: 'new company' });
        expect(wrapper.props().company).toEqual('new company')
    });
    
    test('calls handleSelect() when option is selected', () => {
        let setParam = () => {}
        const handleChangeSpy = sinon.spy(CompanyDropdown.prototype, "handleSelect");
        const event = {target: { value: "Another Company" }};
        const wrapper = mount(<CompanyDropdown setParam={setParam} />)
        wrapper.find('select').simulate('change', event);
        expect(handleChangeSpy.calledOnce).toEqual(true);
    })

    test('calls Api.fetchCompanies() on componentDidMount', () => {
        let setParam = () => {}
        const handleChangeSpy = sinon.spy(Api, "fetchCompanies");
        const wrapper = mount(<CompanyDropdown setParam={setParam} />)
        expect(handleChangeSpy.calledOnce).toEqual(true);
    })
})