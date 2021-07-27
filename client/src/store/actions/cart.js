import axios from "axios";

export function setLoggedIn() {
  return (dispatch) => {
    dispatch({
      type: "SET_LOGGED_IN",
    });
  };
}

export function Addcart(data, history) {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_NODE_API}/addcart`, data, {
        headers: { "content-type": "application/json" }
      })
      .then((response) => {
        dispatch({
          type: "CART_SUCCESS",
          message: response.data.message,
          status: response.data.status,
        });
        history.push("/cart");
      })
      .catch(function (error) {
        dispatch({
          type: "CART_FAILURE",
          message: "Something went wrong",
        });
      });
  };
}

export function Cartget(id) {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_NODE_API}/cart/${id}`)
            .then(response => {
                dispatch({
                    type: 'CART_SUCCESS',
                    message: "cart get list success",
                    data:response.data
                })
            })
            .catch(function (error) { 
                dispatch({
                    type: 'CART_FAILURE',
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
                  type: 'CARTDELETE_SUCCESS',
                  message: "user delete success",
              })
          })
          .catch(function (error) { 
              dispatch({
                  type: 'CARTDELETE_FAILURE',
                  message: 'Something went wrong',
              })
          })
  }
}