import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootreducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);


const store = createStore(rootReducer, enhancer);
store.subscribe(() => {
  })
export default store;