import { createStore, applyMiddleware, compose, combineReducers } from "redux";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  || compose;

export const configStore = (reducers, middlewares) => {
  return createStore(
    combineReducers({
      ...reducers,
    }),
    {},
    composeEnhancers(applyMiddleware( ...middlewares))
  );
};
