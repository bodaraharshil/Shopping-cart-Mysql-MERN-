const initialState = {
    isInprogress: false,
    isError: false,
    message: "",
    status: null,
    cartlist: {},
    qtylist:{},
  };
  
  export default function Cartreducer(state = initialState, action) {
    switch (action.type) {
      case "CART_INPROGRESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: "",
        };
      case "CART_SUCCESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: action.messsage,
          cartlist: action.data,
        };
      case "CART_FAILURE":
        return {
          ...state,
          isInprogress: false,
          isError: true,
          message: action.messsage,
        };
        case "CARTDETAIL_SUCCESS":
        return {
          ...state,
          isInprogress: true,
          isError: false,
          message: action.messsage,
          prodetail: action.data,
        };
  
      case "CARTDETAIL_FAILURE":
        return {
          ...state,
          isInprogress: false,
          isError: true,
          message: action.messsage,
        };
        case "CARTDELETE_SUCCESS":
          return {
            ...state,
            isInprogress: true,
            isError: false,
            message: action.messsage
          };
    
        case "CARTDELETE_FAILURE":
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
  