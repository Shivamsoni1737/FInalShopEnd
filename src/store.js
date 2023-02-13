import {configureStore} from "@reduxjs/toolkit"
import { productReducer } from "./Reducers/Products";
import { shopReducer } from "./Reducers/Shop";
import { userReducer } from "./Reducers/User";

const store = configureStore({
    reducer:{
        user:userReducer,
        shop:shopReducer,
        product:productReducer,
    }
});

export default store;