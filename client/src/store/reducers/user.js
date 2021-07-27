const initialState = {
    isInprogress: false,
    isError: false,
    message: '',
    status: null,
    userlist: {},
};

export default function Userreducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_INPROGRESS':
            return {
                ...state,
                isInprogress: true,
                isError: false,
                message: ''
            }
            case 'USER_SUCCESS':
                return {
                    ...state,
                    isInprogress: true,
                    isError: false,     
                    message: action.messsage,
                    userlist:action.data
                }
                
                case 'USER_FAILURE':
                    return {
                        ...state,
                        isInprogress: false,
                        isError: true,
                        message: action.messsage,
                    }
                case 'USERDELETE_SUCCESS':
                    return {
                        ...state,
                        isInprogress: true,
                        isError: false,     
                        message: action.messsage
                    }                    
                case 'USERDELETE_FAILURE':
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