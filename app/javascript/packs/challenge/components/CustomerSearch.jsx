import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerSearch extends Component {
    static propTypes = {
        setParam: PropTypes.func.isRequired
    }

    static defaultProps = {
        customer: undefined
    }

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        //if the default value is selected, will return undefined so as to not affect the query string in the URL
        //calls setParam which will update App component state and fetch data with params applied
        let value = e.currentTarget.value === '' ? undefined : e.currentTarget.value
        this.props.setParam('customer', value)
    }

    render(){
        return(
            <div className="customer-search-container">
                <input type="text" value={this.props.customer} onChange={this.handleChange} placeholder="Customer Name" />
            </div>
        )
    }
}

export default CustomerSearch;