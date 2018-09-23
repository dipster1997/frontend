import {combineReducers} from 'redux';
// import authenticationReducer from "./authenticationReducer";
import signupReducer from './Signup'

export default combineReducers ({
    // authentication: authenticationReducer
    signup: signupReducer
});