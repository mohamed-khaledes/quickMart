/*
what i installed
    -react-redux
    -redux
    -redux-devtools-extension  (for composewithDevTools)
*/
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from "redux-devtools-extension";

// initial state
const initialState = {}
// thunk 
/*to solve problem of async and await */
const middleware = [thunk]
// store of redux
const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store