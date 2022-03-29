import passwordReducer from "./password";
import passwordStrengthReducerDetails from "./password-strength-details";

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    password: passwordReducer,
    passwordStrengthDetails: passwordStrengthReducerDetails
})

export default allReducers