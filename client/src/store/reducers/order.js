const initialState = {
    isInprogress: false,
    isError: false,
    message: "",
    status: null,
  };
  
  export default function Orderreducer(state = initialState, action) {
    switch (action.type) {
      case "ORDER_ADD_SUCCESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: "",
        };
      case "ORDER_ADD_SUCCESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: action.messsage,
        };
      case "ORDER_ADD_FAILURE":
        return {
          ...state,
          isInprogress: false,
          isError: true,
          message: action.messsage,
        };
      default:
        return state;
    }
  }
  