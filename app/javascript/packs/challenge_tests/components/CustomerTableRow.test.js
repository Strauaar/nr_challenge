import React from 'react';
import CustomerTableRow from '../../challenge/components/CustomerTableRow';
import { mount, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CustomerTableRow Component', () => {
    test('updates text based on customer prop', () => {
        let customer = { first_name: "Aaron", last_name: "Strauli", company: "New Relic" };
        let wrapper = mount(<CustomerTableRow customer={customer}/>)
        const firstName = wrapper.find('.customer-firstname').text();
        const lastName = wrapper.find('.customer-lastname').text();
        const companyName = wrapper.find('.company-name').text();
        expect(firstName).toBe('Aaron')
        expect(lastName).toBe('Strauli')
        expect(companyName).toBe('New Relic')
    })
})