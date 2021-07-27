import axios from "axios";

export function setLoggedIn() {
  return (dispatch) => {
    dispatch({
      type: "SET_LOGGED_IN",
    });
  };
}

export function userSignup(user, history) {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_NODE_API}/signup`, user, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((response) => {
        dispatch({
          type: "USER_SUCCESS",
          message: response.data.message,
          status: response.data.status,
        });
        history.push("/");
      })
      .catch(function (error) {
        dispatch({
          type: "USER_FAILURE",
          message: "Something went wrong",
        });
      });
  };
}

export function Userlogin(user, history) {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_NODE_API}/signin`, user)
      .then((response) => {
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("username", response.data.username);
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
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    dispatch({
      type: "LOGOUT_SUCCESS",
      message: "logout success user",
    });
    history.push("/");
  };
}

