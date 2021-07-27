const initialState = {
    isInprogress: false,
    isError: false,
    message: "",
    status: null,
    isLoggedIn: false,
    showLoginModal: false,
    loginCallback: null,
  };
  
  export default function AuthReducers(state = initialState, action) {
    switch (action.type) {
      case "LOGIN_INPROGRESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: "",
        };
  
      case "SHOW_LOGIN":
        return {
          ...state,
          message: action.message,
          showLoginModal: true,
          loginCallback: action.loginCallback,
        };
  
      case "HIDE_LOGIN":
        return {
          ...state,
          showLoginModal: false,
          loginCallback: null,
        };
  
      case "USERGET_FAILURE":
        return {
          ...state,
          isInprogress: false,
          isError: true,
          message: action.messsage,
        };
  
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isInprogress: false,
          isError: false,
          message: action.message,
          status: action.status,
          isLoggedIn: true,
          showLoginModal: false,
        };
  
      case "SET_LOGGED_IN":
        return {
          ...state,
          isLoggedIn: true,
        };
  
      case "LOGGOUT_SUCCESS":
        return {
          ...state,
          isInprogress: false,
          isError: false,
          message: action.message,
          isLoggedIn: false,
        };
  
      default:
        return state;
    }
  }
  