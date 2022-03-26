import passwordReducer from "./password";

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    password: passwordReducer
})

export default allReducers