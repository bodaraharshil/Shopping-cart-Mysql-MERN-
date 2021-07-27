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

export function Orderget() {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_NODE_API}/allcart`)
            .then(response => {
                dispatch({
                    type: 'ORDER_SUCCESS',
                    message: "Order get list success",
                    data:response.data
                })
            })
            .catch(function (error) { 
                dispatch({
                    type: 'ORDER_FAILURE',
                    message: 'Something went wrong',
                })
            })
    }
}

export function Allorderget() {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_NODE_API}/allorder`)
            .then(response => {
                dispatch({
                    type: 'ALLORDER_SUCCESS',
                    message: "Order get list success",
                    data:response.data
                })
            })
            .catch(function (error) { 
                dispatch({
                    type: 'ALLORDER_FAILURE',
                    message: 'Something went wrong',
                })
            })
    }
}

export function Cartdelete(id, history) {
    return (dispatch) => {
        return axios.delete(`${process.env.REACT_APP_NODE_API}/deletecart/${id}`)
            .then(response => {
                dispatch({
                    type: 'ORDERDELETE_SUCCESS',
                    message: "user delete success",
                })
            })
            .catch(function (error) { 
                dispatch({
                    type: 'ORDERDELETE_FAILURE',
                    message: 'Something went wrong',
                })
            })
    }
}
