import { combineReducers } from "redux";

import dentalReducer from './Reducer';


const rootReducer = combineReducers({
    data:dentalReducer
})


export default rootReducer;