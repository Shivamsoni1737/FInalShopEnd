import {configureStore} from "@reduxjs/toolkit"
import { shopReducer } from "./Reducers/Shop";
import { userReducer } from "./Reducers/User";

const store = configureStore({
    reducer:{
        user:userReducer,
        shop:shopReducer,
    }
});

export default store;