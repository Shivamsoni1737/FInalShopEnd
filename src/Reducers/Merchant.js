import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const merchantReducer = createReducer(initialState, {

    //Manipulating Login
    MerchantLoginRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    MerchantLoginSuccess: (state, action) => {
        state.loading = false;
        state.merchant = action.payload;
        state.isAuthenticated= true;
    },
    MerchantLoginFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    //manipulating Register Merchant
    RegisterRequest: (state) => {
        state.loading = true;
    },
    RegisterSuccess: (state, action) => {
        state.loading = false;
        state.merchant = action.payload;
        state.isAuthenticated = true;
    },
    RegisterFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    //Manipulating Load Merchant
    LoadMerchantRequest: (state) => {
        state.loading = true
    },
    LoadMerchantSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.isAuthenticated = true;
    },
    LoadMerchantFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    //Clear error
    clearErrors: (state) =>{
        state.error = null
    }
})