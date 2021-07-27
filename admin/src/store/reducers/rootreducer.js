import { combineReducers } from "redux";

import Categoryreducer from './category';
import Orderreducer from './order';
import Productreducer from './product';
import Authreducer from './auth';
import Userreducer from './user';

const rootReducer = combineReducers({
    Categoryreducer,
    Authreducer,
    Productreducer,
    Orderreducer,
    Userreducer
})

export default rootReducer;