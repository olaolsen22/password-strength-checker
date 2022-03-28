import passwordReducer from "./password";
import passwordStrengthReducer from "./password-strength";

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    password: passwordReducer,
    passwordStrength: passwordStrengthReducer
})

export default allReducers