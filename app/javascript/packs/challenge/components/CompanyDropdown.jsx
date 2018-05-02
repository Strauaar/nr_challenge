import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompanyDropdown extends Component {
    static propTypes = {
        setCompany: PropTypes.func.isRequired
    }

    render(){
        return(
            <div>
                company dropdown
            </div>
        )
    }
}

export default CompanyDropdown;