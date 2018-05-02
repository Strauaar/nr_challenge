import React, { Component } from 'react';
import * as CompanyApiUtil from '../utils/company_util';
import PropTypes from 'prop-types';

class CompanyDropdown extends Component {
    static propTypes = {
        setCompany: PropTypes.func.isRequired
    }

    static defaultProps = {
        currentCompany: 'All companies'
    }

    constructor(props){
        super(props)
        this.state = { companies: [] }
    }

    componentDidMount(){
        CompanyApiUtil.fetchCompanies()
            .then(response => {this.setState({companies: response.data})})
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="company-dropdown-container">
                <div className="current-company">{this.props.currentCompany}</div>
                <ul className="company-list">
                    {
                        this.state.companies.map(company => {
                            return <li className="company-item">{company.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default CompanyDropdown;