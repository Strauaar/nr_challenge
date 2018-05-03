import React from 'react';
import CustomerSearch from '../../challenge/components/CustomerSearch';
import { mount, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CustomerSearch Component', () => {

    test('updates customer props when receiving new props', () => {
        let setParam = () => {}
        const wrapper = mount(<CustomerSearch setParam={setParam}/>);
        wrapper.setProps({ customer: 'new customer' });
        expect(wrapper.props().customer).toEqual('new customer')
    });
    
    test('calls handleChange() when input value changes', () => {
        let setParam = () => {}
        const handleChangeSpy = sinon.spy(CustomerSearch.prototype, "handleChange");
        const event = {target: { value: "1" }};
        const wrapper = mount(<CustomerSearch setParam={setParam} />)
        wrapper.find('input').simulate('change', event);
        expect(handleChangeSpy.calledOnce).toEqual(true);
    })
})
  