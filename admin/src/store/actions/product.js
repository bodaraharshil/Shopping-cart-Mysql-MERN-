import axios from "axios";

export function setLoggedIn() {
  return (dispatch) => {
    dispatch({
      type: "SET_LOGGED_IN",
    });
  };
}

export function Addproduct(user, history) {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_NODE_API}/addproduct`, user, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((response) => {
        dispatch({
          type: "PRODUCT_SUCCESS",
          message: response.data.message,
          status: response.data.status,
        });
        history.push("/product");
      })
      .catch(function (error) {
        dispatch({
          type: "PRODUCT_FAILURE",
          message: "Something went wrong",
        });
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

export function Productdelete(id, history) {
  return (dispatch) => {
      return axios.delete(`${process.env.REACT_APP_NODE_API}/deleteproduct/${id}`)
          .then(response => {
              dispatch({
                  type: 'PRODUCTDELETE_SUCCESS',
                  message: "product delete success",
              })
          })
          .catch(function (error) { 
              dispatch({
                  type: 'PRODUCTDELETE_FAILURE',
                  message: 'Something went wrong',
              })
          })
  }
}

export function Updateproduct(id,product, history) {
  return (dispatch) => {
      return axios.put(`${process.env.REACT_APP_NODE_API}/updateproduct/${id}`, product , {headers:{'Content-Type': 'application/json' }, headers: { "content-type": "multipart/form-data" },})
          .then(response => {
              dispatch({
                  type: 'UPDATECATEGORY_SUCCESS',
                  message: "data updated success..",
              })
              history.push("/product");
          })
          .catch(function (error) { 
              dispatch({
                  type: 'UPDATECATEGORY_FAILURE',
                  message: 'Something went wrong',
              })
          })
  }
}