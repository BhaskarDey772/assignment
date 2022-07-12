import axios from 'axios';

const baseURL = "https://hn.algolia.com/api/v1/"

export const homeData = (debounce)=>{
    
    return axios.get(`${baseURL}search?query=${debounce}`).then(({data})=>data).catch((err)=>console.error(err))
}

export const detailsPageData = (objectId)=>{

    return axios.get(`${baseURL}items/${objectId}`).then(({data})=>data).catch((err)=>console.error(err))
}

