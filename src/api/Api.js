import axios from 'axios';

const instance = axios.create({
    baseURL: "https://hn.algolia.com/api/v1/",
  });
  


export const homeData = (debounce)=>{
    
    return instance.get(`search?query=${debounce}`).then(({data})=>data).catch((err)=>console.error(err))
}

export const detailsPageData = (objectId)=>{

    return instance.get(`items/${objectId}`).then(({data})=>data).catch((err)=>console.error(err))
}

