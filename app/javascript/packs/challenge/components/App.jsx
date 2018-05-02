import React, { Component } from 'react';
import qs from 'query-string';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import CustomerSearch from './CustomerSearch';
import CompanyDropdown from './CompanyDropdown';
import CustomerTable from './CustomerTable';
import * as Api from '../utils/api_util';


class App extends Component {
    
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    
    constructor(){
        super()
        this.state = { data: [], query: { company: 'All Companies', filter: 'Select' } }
        this.setCustomer = this.setCustomer.bind(this);
        this.setCompany = this.setCompany.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    componentDidMount(){
        let query = qs.parse(location.search)
        this.setState({query})
    }

    setCustomer(){

    }

    setCompany(company){
        let newQuery = Object.assign({}, this.state.query, { company })
        let queryString = '?' + qs.stringify(newQuery)
        this.props.history.push({
            pathname: '/',
            search: queryString
        })
        this.setState({ query: newQuery })
        Api.fetchCustomers(newQuery)
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
    }

    setFilter(filter){
        let newQuery = Object.assign({}, this.state.query, { filter })
        let queryString = '?' + qs.stringify(newQuery)
        this.props.history.push({
            pathname: '/',
            search: queryString
        })
        this.setState({ query: newQuery })
        Api.fetchCustomers(newQuery)
            .then(response => {
                console.log(response)
                this.setState({data: response.data})
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="main-content-container">
                <div className="content-container">
                    <CustomerSearch setCustomer={this.setCustomer}/>
                    <CompanyDropdown company={this.state.query.company} setCompany={this.setCompany} />
                    <CustomerTable data={this.state.data} selected={this.state.query.filter} setFilter={this.setFilter} />
                </div>
            </div>
        )
    }
}

export default withRouter(App);