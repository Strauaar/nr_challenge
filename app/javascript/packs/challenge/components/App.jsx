import React, { Component } from 'react';
import CustomerSearch from './CustomerSearch';
import CompanyDropdown from './CompanyDropdown';
import CustomerTable from './CustomerTable';

class App extends Component {
    constructor(){
        super()
        this.setCustomer = this.setCustomer.bind(this);
        this.setCompany = this.setCompany.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }

    setCustomer(){
    }

    setCompany(){

    }

    setFilter(){

    }

    render(){
        return(
            <div className="main-content">
                <div>
                    <CustomerSearch setCustomer={this.setCustomer}/>
                </div>
                <div>
                    <CompanyDropdown setCompany={this.setCompany} />
                </div>
                <div>   
                    <CustomerTable setFilter={this.setFilter} />
                </div>
            </div>
        )
    }
}

export default App;