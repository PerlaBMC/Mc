import axios from "axios";

const URL_ROOT = "http://localhost:4001/api"

const getProdusctsService = async () => {
    const response = await axios.get (`${URL_ROOT}/jeweler`);
return response
}

const getProductService= async (id) => {
    const response = await axios.get (`${URL_ROOT}/jeweler/${id}`)
    return response
}

const postPedido = async (form) => {
    const response = await axios.post (`${URL_ROOT}/pedido`, form)
    return response
}

const getProductShoesService = async () => {
    const response = await axios.get (`${URL_ROOT}/shoes`);
return response
}

const getProductShoesIDService= async (id) => {
    const response = await axios.get (`${URL_ROOT}/shoes/${id}`)
    return response
}

const getProductCloseService = async () => {
    const response = await axios.get (`${URL_ROOT}/close`);
return response
}

const getProductCloseIDService= async (id) => {
    const response = await axios.get (`${URL_ROOT}/close/${id}`)
    return response
}


export {getProdusctsService, 
        getProductService, 
        postPedido, 
        getProductShoesService, 
        getProductShoesIDService, 
        getProductCloseService, 
        getProductCloseIDService}