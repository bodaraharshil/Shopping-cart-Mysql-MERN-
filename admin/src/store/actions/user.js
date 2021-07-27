import axios from "axios";

export function setLoggedIn() {
  return (dispatch) => {
    dispatch({
      type: "SET_LOGGED_IN",
    });
  };
}

export function Userget() {
    return (dispatch) => {
        return axios.get(`${process.env.REACT_APP_NODE_API}/alluser`)
            .then(response => {
                dispatch({
                    type: 'USER_SUCCESS',
                    message: "user get list success",
                    data:response.data
                })
            })
            .catch(function (error) { 
                dispatch({
                    type: 'USER_FAILURE',
                    message: 'Something went wrong',
                })
            })
    }
}

export function Userdelete(id, history) {
  return (dispatch) => {
      return axios.delete(`${process.env.REACT_APP_NODE_API}/deleteuser/${id}`)
          .then(response => {
              dispatch({
                  type: 'USERDELETE_SUCCESS',
                  message: "user delete success",
              })
          })
          .catch(function (error) { 
              dispatch({
                  type: 'USERDELETE_FAILURE',
                  message: 'Something went wrong',
              })
          })
  }
}

