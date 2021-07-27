import axios from "axios";

export function setLoggedIn() {
    return dispatch => {
        dispatch({
            type: 'SET_LOGGED_IN'
        })
    }
}

export function Categoryget() {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_NODE_API}/allcategory`)
            .then(response => {
                dispatch({
                    type: 'CATEGORY_SUCCESS',
                    message: "category get list success",
                    data:response.data
                })
            })
            .catch(function (error) { 
                dispatch({
                    type: 'CATEGORY_FAILURE',
                    message: 'Something went wrong',
                })
            })
    }
}

