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
        let value = e.currentTarget.value === '' ? undefined : e.currentTarget.value
        this.props.setParam('customer', value)
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