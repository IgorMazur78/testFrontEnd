const BaseApiProducts = "https://api.thedogapi.com/v1/breeds"
const fetchBreedsPage = (limitItem,numberPage) => {
    return fetch(
        `${BaseApiProducts}?limit=${limitItem}&page=${numberPage}`
        
    ).then((res)=>res.json())
}

export default {
    fetchBreedsPage,
 
}