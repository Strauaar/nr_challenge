import React, { Component } from 'react';
import qs from 'query-string';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import CustomerSearch from './CustomerSearch';
import CompanyDropdown from './CompanyDropdown';
import CustomerTable from './CustomerTable';


class App extends Component {
    
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    

    constructor(){
        super()
        this.state = { currentCompany: 'All Companies' }
        this.setCustomer = this.setCustomer.bind(this);
        this.setCompany = this.setCompany.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    setCustomer(){

    }

    setCompany(company){
        let newState = Object.assign({}, this.state, { currentCompany: company })
        let query = '?' + qs.stringify(newState)
        this.props.history.push({
            pathname: '/',
            search: query
        })
        this.setState(newState)
    }

    setFilter(){

    }

    render(){
        return(
            <div className="main-content-container">
                <div className="content-container">
                    <CustomerSearch setCustomer={this.setCustomer}/>
                    <CompanyDropdown currentCompany={this.state.currentCompany} setCompany={this.setCompany} />
                    <CustomerTable setFilter={this.setFilter} />
                </div>
            </div>
        )
    }
}

export default withRouter(App);