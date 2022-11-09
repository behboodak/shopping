import axios from "axios";

const BASIC_URL = "https://fakestoreapi.com"

const getproducts = async () =>{
    const response = await axios.get(`${BASIC_URL}/products`);
    return response.data;
}

export {getproducts};