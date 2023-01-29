import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const userReducer = createReducer(initialState, {

    //Manipulating Login
    UserLoginRequest: (state) => {
        state.loading= true;                                               //This is an arrow function not an object
    },
    UserLoginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated= true;
    },
    UserLoginFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    //Manipulating Logout
    LogoutRequest: (state) => {
        state.loading= true;
    },
    LogoutSuccess: (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated= false;
    },
    LogoutFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
    },



    //manipulating Register User
    RegisterRequest: (state) => {
        state.loading = true;
    },
    RegisterSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    RegisterFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    //Manipulating Load User
    LoadUserRequest: (state) => {
        state.loading = true
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoadUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    clearErrors: (state) =>{
        state.error = null
    }
})