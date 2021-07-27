import axios from "axios";

export function setLoggedIn() {
    return dispatch => {
        dispatch({
            type: 'SET_LOGGED_IN'
        })
    }
}

export function Addcategory(category, history) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_NODE_API}/addcategory`, {category}, {headers: { 'content-type': 'application/json' }})
            .then(response => {
                dispatch({
                    type: 'CATEGORY_ADD_SUCCESS',
                    message: response.data.message,
                    status: response.data.status
                })
                history.push("/category");
            })
            .catch(function (error) { 
                console.log("errorerror",error);
                dispatch({
                    type: 'CATEGORY_FAILURE',
                    message: 'Something went wrong',
                })
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

export function Categorydelete(id, history) {
    return (dispatch) => {
        return axios.delete(`${process.env.REACT_APP_NODE_API}/deletecategory/${id}`)
            .then(response => {
                dispatch({
                    type: 'CATEGORYDELETE_SUCCESS',
                    message: "user delete success",
                })
            })
            .catch(function (error) { 
                dispatch({
                    type: 'CATEGORYDELETE_FAILURE',
                    message: 'Something went wrong',
                })
            })
    }
}

export function Updatecategory(id, category, history) {
    return (dispatch) => {
        return axios.post(`${process.env.REACT_APP_NODE_API}/updatecategory/${id}`, {category}, {headers:{'Content-Type': 'application/json' }})
            .then(response => {
                dispatch({
                    type: 'UPDATECATEGORY_SUCCESS',
                    message: "data updated success..",
                })
                history.push("/category");
            })
            .catch(function (error) { 
                dispatch({
                    type: 'UPDATECATEGORY_FAILURE',
                    message: 'Something went wrong',
                })
            })
    }
}