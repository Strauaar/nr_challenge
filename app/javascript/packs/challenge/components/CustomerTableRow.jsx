import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerTableRow extends Component {
    static propTypes = {
        customer: PropTypes.object.isRequired
    }

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <td>{this.props.customer.first_name}</td>
                <td>{this.props.customer.last_name}</td>
                <td></td>
            </React.Fragment>
        )
    }
}

export default CustomerTableRow;