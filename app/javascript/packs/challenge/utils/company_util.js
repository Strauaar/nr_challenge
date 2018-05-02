import axios from 'axios';

export const fetchCompanies = () => {
    return axios.get('/api/companies')
}