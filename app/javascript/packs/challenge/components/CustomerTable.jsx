import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomerTableRow from './CustomerTableRow';

class CustomerTable extends Component {
    static propTypes = {
        setFilter: PropTypes.func.isRequired
    }

    static defaultProps = {
        selected: 'Select'
    }

    constructor(props){
        super(props)
        this.state = {selected: 'none'}
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(e){
        this.props.setFilter(e.target.value)
    }

    render(){
        return(
            <div className="customer-table-container">
                <div className="table-head">
                    <div className="filter-container">
                        <select onChange={this.handleSelect} value={this.props.selected}>
                            <option value="default">Select</option>
                            <option value="first_name,asc">First name, ascending</option>
                            <option value="first_name,desc">First name, descending</option>
                            <option value="last_name,asc">Last name, ascending</option>
                            <option value="last_name,desc">Last name, descending</option>
                            <option value="company,asc">Company name, ascending</option>
                            <option value="company,desc">Company name, descending</option>
                        </select>
                    </div>
                </div>
                <div className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Company name</th>
                            </tr>
                            {
                                this.props.data.map(customer => {
                                    return(<tr><CustomerTableRow customer={customer} /></tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CustomerTable;