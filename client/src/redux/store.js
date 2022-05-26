import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers/index'


const initalState = {}

const store = createStore(rootReducer, initalState, composeWithDevTools())

export default store