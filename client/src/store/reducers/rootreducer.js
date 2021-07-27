import { combineReducers } from "redux";

import AuthReducers from './auth';
import Categoryreducer from './category';
import Productreducer from './product';
import Cartreducer from './cart';
import Orderreducer from './order';

const rootReducer = combineReducers({
  AuthReducers,
  Categoryreducer,
  Productreducer,
  Orderreducer,
  Cartreducer,

});

export default rootReducer;
