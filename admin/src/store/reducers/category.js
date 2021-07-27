const initialState = {
    isInprogress: false,
    isError: false,
    message: '',
    status: null,
    catelist: {},
};

export default function Categoryreducer(state = initialState, action) {
    switch (action.type) {
        case 'CATEGORY_INPROGRESS':
            return {
                ...state,
                isInprogress: true,
                isError: false,
                message: ''
            }

            case 'CATEGORY_SUCCESS':
                return {
                    ...state,
                    isInprogress: true,
                    isError: false,     
                    message: action.messsage,
                    catelist:action.data
                }
                
                case 'CATEGORY_FAILURE':
                    return {
                        ...state,
                        isInprogress: false,
                        isError: true,
                        message: action.messsage,
                    }
                case 'CATEGORYDELETE_SUCCESS':
                    return {
                        ...state,
                        isInprogress: true,
                        isError: false,     
                        message: action.messsage
                    }                    
                case 'CATEGORYDELETE_FAILURE':
                    return {
                        ...state,
                        isInprogress: false,
                        isError: true,
                        message: action.messsage,
                    }  
                case 'UPDATECATEGORY_SUCCESS':
                    return   {
                        ...state,
                        isInprogress: true,
                        isError: false,     
                        message: action.messsage,
                    }                    
                case 'UPDATECATEGORY_FAILURE':
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