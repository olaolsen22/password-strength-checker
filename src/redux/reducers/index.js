import isAPIloadingReducer from "./is-api-loading";
import passwordStrengthDetailsReducer from "./password-strength-details";

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isAPIloading: isAPIloadingReducer,
    passwordStrengthDetails: passwordStrengthDetailsReducer
})

export default allReducers