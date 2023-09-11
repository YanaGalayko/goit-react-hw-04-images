import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/'

export const fetchQuery = async( query, page) => {
    const params = new URLSearchParams({
        key: '38346186-0e7383a20635be2cd3597c465',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 12,
    });

    const resp = await axios.get(`?${params}`)  
    return resp.data  
};