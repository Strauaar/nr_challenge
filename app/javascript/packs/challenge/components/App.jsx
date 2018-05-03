import React, { Component } from 'react';
import qs from 'query-string';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import CustomerSearch from './CustomerSearch';
import CompanyDropdown from './CompanyDropdown';
import CustomerTable from './CustomerTable';
import * as Api from '../utils/api_util';


export class App extends Component {
    
    static propTypes = {
        match: PropTypes.object,
        location: PropTypes.object,
        history: PropTypes.object
    }
    
    constructor(){
        super()
        this.state = { data: [], query: { company: undefined, filter: undefined, customer: undefined } }
        this.setParam = this.setParam.bind(this);
        this.setUrl = this.setUrl.bind(this);
        this.fetchCustomers = this.fetchCustomers.bind(this);
    }

    componentDidMount(){
        let query = location.search === '' ? this.state.query : qs.parse(location.search)
        this.setState({query})
        this.fetchCustomers(query)
    }

    setParam(field, data){
        let newQuery = Object.assign({}, this.state.query, { [field]: data })
        this.setUrl(newQuery)
        this.setState({ query: newQuery })
        this.fetchCustomers(newQuery)        
    }

    setUrl(query){
        let queryString = '?' + qs.stringify(query)
        this.props.history.push({
            pathname: '/',
            search: queryString
        })
    }

    fetchCustomers(query){
        Api.fetchCustomers(query)
            .then(response => {
                this.setState({data: response.data})                
            })
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="main-content-container">
                <div className="content-container">
                    <CustomerSearch customer={this.state.query.customer} setParam={this.setParam}/>
                    <CompanyDropdown company={this.state.query.company} setParam={this.setParam} />
                    <CustomerTable data={this.state.data} companySelected={Boolean(this.state.query.company)} selected={this.state.query.filter} setParam={this.setParam} />
                </div>
            </div>
        )
    }
}

export default withRouter(App);