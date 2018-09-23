import { userConstants } from "../actions/types"

export default function (state={}, action) {
    switch(action.type){
        case userConstants.REGISTER_REQUEST:
            return {};
        default:
            return state;
    }
}