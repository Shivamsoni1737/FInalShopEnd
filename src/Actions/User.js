import axios from "axios"
export const changeUserPassword = (oldPassword,newPassword,confirmPassword) => async(dispatch) => {

    try {

        dispatch({
            type:"ChangeUserPasswordRequest"
        })

        const {data} = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/user/password/change`,{
            oldPassword,
            newPassword,
            confirmPassword
        },{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"ChangeUserPasswordSuccess",
            payload:data.message
        })
        
    } catch (error) {
        dispatch({
            type:"ChangeUserPasswordFailure",
            payload:error.response.data.message
        })
    }
}