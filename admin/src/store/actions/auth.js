import axios from "axios";

export function setLoggedIn() {
  return (dispatch) => {
    dispatch({
      type: "SET_LOGGED_IN",
    });
  };
}

export function Userlogin(user, history) {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_NODE_API}/signin`, user)
      .then((response) => {
        localStorage.setItem("jwt", response.data.token);
        dispatch({
          type: "LOGIN_SUCCESS",
          message: response.data.message,
          status: response.data.status,
        });
        history.push("/");
      })
      .catch(function (error) {
        dispatch({
          type: "LOGIN_FAILURE",
          message: "Something went wrong",
        });
      });
  };
}


export function Logout(history) {
  return (dispatch) => {
    localStorage.removeItem("jwt");
    dispatch({
      type: "LOGOUT_SUCCESS",
      message: "logout success user",
    });
    history.push("/login");
  };
}

