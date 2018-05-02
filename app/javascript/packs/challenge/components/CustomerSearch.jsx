import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerSearch extends Component {
    static propTypes = {
        setCustomer: PropTypes.func.isRequired
    }

    static defaultProps = {
        customer: ''
    }

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.setCustomer(e.currentTarget.value)
    }

    render(){
        return(
            <div className="customer-search-container">
                <input type="text" value={this.props.customer} onChange={this.handleChange} />
            </div>
        )
    }
}

export default CustomerSearch;