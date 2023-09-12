import axios from "axios";

export const getProducts = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/home-list`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const getProductsSale = async (page) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/list-sale?page=`+page)
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const getProductById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/`+id)
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const getProductSimilarByIdBrand = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/brand/`+id)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const getAllProductByIdBrand = async (id,page) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/all-brand/`+id +"/"+page)
        return result.data
    } catch (e) {
        console.log(e)
    }
}

export const searchProductByName = async (name,page) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/search?name=`+name+"&&page="+page);
        return result.data
    } catch (e) {
        console.log(e)
    }
}