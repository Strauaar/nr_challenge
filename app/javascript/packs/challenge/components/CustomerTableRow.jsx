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
                <td className="customer-firstname">{this.props.customer.first_name}</td>
                <td className="customer-lastname">{this.props.customer.last_name}</td>
                <td className="company-name">{this.props.customer.company}</td>
            </React.Fragment>
        )
    }
}

export default CustomerTableRow;