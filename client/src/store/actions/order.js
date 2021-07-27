import axios from "axios";

export function setLoggedIn() {
  return (dispatch) => {
    dispatch({
      type: "SET_LOGGED_IN",
    });
  };
}

export function Addorder(data, history) {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_NODE_API}/addorder`, data, {
        headers: { "content-type": "application/json" }
      })
      .then((response) => {
        dispatch({
          type: "ORDER_ADD_SUCCESS",
          message: response.data.message,
          status: response.data.status,
        });
        history.push("/payment");
      })
      .catch(function (error) {
        dispatch({
          type: "ORDER_ADD_FAILURE",
          message: "Something went wrong",
        });
      });
  };
}
