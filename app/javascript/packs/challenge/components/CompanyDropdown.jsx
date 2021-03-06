import React, { Component } from 'react';
import * as Api from '../utils/api_util';
import PropTypes from 'prop-types';

class CompanyDropdown extends Component {
    static propTypes = {
        setParam: PropTypes.func.isRequired
    }

    static defaultProps = {
        company: undefined
    }

    constructor(props){
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
        this.state = { companies: [] }
    }

    componentDidMount(){
        //fetches all companies once the component mounts and sets state to allow display of companies in dropdown
        Api.fetchCompanies()
            .then(response => {this.setState({companies: response.data})})
            .catch(err => console.log(err))
    }

    handleSelect(e){
        //if the default value is selected, will return undefined so as to not affect the query string in the URL
        //calls setParam which will update App component state and fetch data with params applied
        let value = e.target.value === 'all' ? undefined : e.target.value
        this.props.setParam('company', value)
    }

    renderCompanyList(){
        return this.state.companies.map((company, idx) => {
            return <option key={idx} value={company.name} className="company-item">{company.name}</option>
        })
    }

    render(){
        return(
            <div className="company-dropdown-container">
                <select onChange={this.handleSelect} value={this.props.company}>
                    <option value='all'> All Companies </option>
                    {
                        this.renderCompanyList()
                    }
                </select>
            </div>
        )
    }
}

export default CompanyDropdown;