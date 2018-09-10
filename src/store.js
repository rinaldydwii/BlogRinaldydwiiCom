import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
import articleReducer from './reducers/ArticleReducer';
// const reducers = combineReducers({testimonialReducer, productReducer, subscribeReducer});
const reducers = articleReducer;

export default function configureStore() {
    return createStore(
        reducers,
        // applyMiddleware(thunkMiddleware)
        applyMiddleware(loggerMiddleware, thunkMiddleware)
    );
};