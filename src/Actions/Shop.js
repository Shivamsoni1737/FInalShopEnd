import axios from "axios"

export const myShops = () => async (dispatch) => {

    try {

        dispatch({
            type:"GetMyShopsRequest"
        })

        const {data} = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/shops`)

        dispatch({
            type:"GetMyShopsSuccess",
            payload:data.shops
        })
        
    } catch (error) {
        dispatch({
            type:"GetMyShopsFailure",
            payload:error.response.data.message
        })        
    }
}

//shop details
export const shopDetails = (shopId) => async (dispatch) => {

    try {

        dispatch({
            type:"GetMyShopsRequest"
        })

        const {data} = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/shop/${shopId}`)

        dispatch({
            type:"GetMyShopsSuccess",
            payload:data.shops
        })
        
    } catch (error) {
        dispatch({
            type:"GetMyShopsFailure",
            payload:error.response.data.message
        })        
    }
}

//All products of a shop
export const allProductsOfShop = (shopid) => async (dispatch) => {

    try {

        dispatch({
            type:"allShopProductsRequest"
        })

        const {data} = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/shop/products/${shopid}`)

        dispatch({
            type:"allShopProductsSuccess",
            payload:data.products
        })
        
    } catch (error) {
        dispatch({
            type:"allShopProductsFailure",
            payload:error.response.data.message
        })        
    }
}


//Add product to shop
export const addProduct = (shopid) => async (dispatch) => {

    try {

        dispatch({
            type:"addProductRequest"
        })

        const {data} = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/add/product/${shopid}`)

        dispatch({
            type:"addProductSuccess",
            payload:data.message
        })
        
    } catch (error) {
        dispatch({
            type:"addProductFailure",
            payload:error.response.data.message
        })        
    }
}