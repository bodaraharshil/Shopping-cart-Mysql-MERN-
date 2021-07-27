const initialState = {
    isInprogress: false,
    isError: false,
    message: '',
    status: null,
    prolist: {},
};

export default function Productreducer(state = initialState, action) {
    switch (action.type) {
        case 'PRODUCT_INPROGRESS':
            return {
                ...state,
                isInprogress: true,
                isError: false,
                message: ''
            }
            case 'PRODUCT_SUCCESS':
                return {
                    ...state,
                    isInprogress: true,
                    isError: false,     
                    message: action.messsage,
                    prolist:action.data
                }
                
                case 'PRODUCT_FAILURE':
                    return {
                        ...state,
                        isInprogress: false,
                        isError: true,
                        message: action.messsage,
                    }
                case 'PRODUCTDELETE_SUCCESS':
                    return {
                        ...state,
                        isInprogress: true,
                        isError: false,     
                        message: action.messsage
                    }                    
                case 'PRODUCTDELETE_FAILURE':
                    return {
                        ...state,
                        isInprogress: false,
                        isError: true,
                        message: action.messsage,
                    }  
                case 'UPDATEPRODUCT_SUCCESS':
                    return   {
                        ...state,
                        isInprogress: true,
                        isError: false,     
                        message: action.messsage,
                    }                    
                case 'UPDATEPRODUCT_FAILURE':
                    return {
                        ...state,
                        isInprogress: false,
                        isError: true,
                        message: action.messsage,
                    }        
        default:
            return state;
    }
}