import React from 'react';
import CustomerTable from '../../challenge/components/CustomerTable';
import CustomerTableRow from '../../challenge/components/CustomerTableRow';
import { mount, configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CustomerTable Component', ()=> {
    test('updates selected prop when receiving new props', () => {
        let setParam = () => {}
        const wrapper = mount(<CustomerTable data={[]} setParam={setParam}/>);
        wrapper.setProps({ filter: 'different filter' });
        expect(wrapper.props().filter).toEqual('different filter')
    })

    test('calls handleSelect() when a filter option is chosen', () => {
        let setParam = () => {}
        const handleChangeSpy = sinon.spy(CustomerTable.prototype, "handleSelect");
        const event = {target: { value: "Another filter" }};
        const wrapper = mount(<CustomerTable data={[]} setParam={setParam} />)
        wrapper.find('select').simulate('change', event);
        expect(handleChangeSpy.calledOnce).toEqual(true);
    })

    test('renders CompanyTableRow when data is present', () => {
        let setParam = () => {}        
        const data = [
            {first_name: 'Aaron', last_name: 'Strauli', company: 'New Relic'},
            {first_name: 'Test', last_name: 'Ing', company: 'Mew Relic'},
            {first_name: 'Tes', last_name: 'Ter', company: 'Ne Belic'} 
        ]
        const wrapper = mount(<CustomerTable data={[]} setParam={setParam} />)        
        wrapper.setProps({ data });
        expect(wrapper.props().data.length).toBe(3)

    })
})