import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerTable extends Component {
    static propTypes = {
        setFilter: PropTypes.func.isRequired
    }

    render(){
        return(
            <div>
                CustomerTable
            </div>
        )
    }
}

export default CustomerTable;