const initialState = {
  isInprogress: false,
  isError: false,
  message: "",
  status: null,
  prolist: {},
  catepro:{},
  prodetail:{}
};

export default function Productreducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCT_INPROGRESS":
      return {
        ...state,
        isInprogress: true,
        isError: false,
        message: "",
      };
    case "PRODUCT_SUCCESS":
      return {
        ...state,
        isInprogress: true,
        isError: false,
        message: action.messsage,
        prolist: action.data,
      };

    case "PRODUCT_FAILURE":
      return {
        ...state,
        isInprogress: false,
        isError: true,
        message: action.messsage,
      };
    case "CATEPRO_SUCCESS":
      return {
        ...state,
        isInprogress: true,
        isError: false,
        message: action.messsage,
        catepro: action.data,
      };

    case "CATEPRO_FAILURE":
      return {
        ...state,
        isInprogress: false,
        isError: true,
        message: action.messsage,
      }; 
      case "PRODUCTDETAIL_SUCCESS":
      return {
        ...state,
        isInprogress: true,
        isError: false,
        message: action.messsage,
        prodetail: action.data,
      };

    case "PRODUCTDETAIL_FAILURE":
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
