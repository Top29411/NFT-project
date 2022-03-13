import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const sagaWatch = () => sagaMiddleware.run(sagas);

const createMiddlewares = () => [sagaMiddleware];

export default createMiddlewares;
