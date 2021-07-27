import axios from "axios";

export function setLoggedIn() {
  return (dispatch) => {
    dispatch({
      type: "SET_LOGGED_IN",
    });
  };
}

export function Productget() {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_NODE_API}/allproduct`)
            .then(response => {
                dispatch({
                    type: 'PRODUCT_SUCCESS',
                    message: "product get list success",
                    data:response.data
                })
            })
            .catch(function (error) { 
                dispatch({
                    type: 'PRODUCT_FAILURE',
                    message: 'Something went wrong',
                })
            })
    }
}

export function Cateproget(data) {
  return (dispatch) => {
      return axios.get(`${process.env.REACT_APP_NODE_API}/catepro/${data}`)
          .then(response => {
              console.log("esponseesponse",response)
              dispatch({
                  type: 'CATEPRO_SUCCESS',
                  message: "catepro get list success",
                  data:response.data
              })
          })
          .catch(function (error) { 
              dispatch({
                  type: 'CATEPRO_FAILURE',
                  message: 'Something went wrong',
              })
          })
  }
}

export function Productdetailget(id,history) {
  return (dispatch) => {
      return axios.get(`${process.env.REACT_APP_NODE_API}/product/${id}`)
          .then(response => {
              dispatch({
                  type: 'PRODUCTDETAIL_SUCCESS',
                  message: "catepro get list success",
                  data:response.data
              })
          })
          .catch(function (error) { 
              dispatch({
                  type: 'PRODUCTDETAIL_FAILURE',
                  message: 'Something went wrong',
              })
          })
  }
}