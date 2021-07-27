const initialState = {
    isInprogress: false,
    isError: false,
    message: "",
    status: null,
    orderlist: {},
    allorder:{}
  };
  
  export default function Orderreducer(state = initialState, action) {
    switch (action.type) {
      case "ORDER_INPROGRESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: "",
        };
      case "ORDER_SUCCESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: action.messsage,
          orderlist: action.data,
        };
  
      case "ORDER_FAILURE":
        return {
          ...state,
          isInprogress: false,
          isError: true,
          message: action.messsage,
        };
        case "ALLORDER_SUCCESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: action.messsage,
          allorder: action.data,
        };
  
      case "ALLORDER_FAILURE":
        return {
          ...state,
          isInprogress: false,
          isError: true,
          message: action.messsage,
        };
        case "ORDERDELETE_SUCCESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: action.messsage,
        };
  
      case "ORDERDELETE_FAILURE":
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
  