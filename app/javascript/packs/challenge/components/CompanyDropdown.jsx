import React, { Component } from 'react';
import * as Api from '../utils/api_util';
import PropTypes from 'prop-types';

class CompanyDropdown extends Component {
    static propTypes = {
        setCompany: PropTypes.func.isRequired
    }

    static defaultProps = {
        company: 'All companies'
    }

    constructor(props){
        super(props)
        this.toggleDropdown = this.toggleDropdown.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = { companies: [], displayDropdown: false }
    }

    componentDidMount(){
        Api.fetchCompanies()
            .then(response => {this.setState({companies: response.data})})
            .catch(err => console.log(err))
    }

    handleClick(company){
        this.props.setCompany(company)
        this.setState({displayDropdown: false})
    }

    toggleDropdown(){
        this.setState({displayDropdown: !this.state.displayDropdown})
    }

    renderCompanyList(){
        return !this.state.displayDropdown ? null : (<ul className="company-list">
                                                        {
                                                            this.state.companies.map((company, idx) => {
                                                                return <li key={idx} onClick={() => this.handleClick(company.name)} className="company-item">{company.name}</li>
                                                            })
                                                        }
                                                    </ul>)
    }

    render(){
        return(
            <div className="company-dropdown-container">
                <div className="current-company" onClick={this.toggleDropdown} >{this.props.company}</div>
                {
                    this.renderCompanyList()
                }
            </div>
        )
    }
}

export default CompanyDropdown;