import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerTable extends Component {
    static propTypes = {
        setFilter: PropTypes.func.isRequired
    }

    render(){
        return(
            <div className="customer-table-container">
                CustomerTable
            </div>
        )
    }
}

export default CustomerTable;