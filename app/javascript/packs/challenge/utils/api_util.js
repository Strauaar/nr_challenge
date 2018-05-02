import axios from 'axios';

export const fetchCompanies = () => {
    return axios.get('/api/companies')
}

export const fetchCustomers = (params) => {
    return axios.get('/api/customers', { params })
}