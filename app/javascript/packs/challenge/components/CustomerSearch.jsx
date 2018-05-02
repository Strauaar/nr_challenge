import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerSearch extends Component {
    static propTypes = {
        setCustomer: PropTypes.func.isRequired
    }

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="customer-search-container">
                <input type="text" />
            </div>
        )
    }
}

export default CustomerSearch;