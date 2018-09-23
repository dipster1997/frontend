import { userConstants }from 'actions/types';

export function registerUser(user){
    return{
        type: userConstants.REGISTER_REQUEST,
        payload : user
    };
}