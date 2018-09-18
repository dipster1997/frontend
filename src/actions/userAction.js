import { history } from "../common/history";
import { authConsts } from "../types/authenticationType";

export const userActions = {
  login
}


function handleResponse(response) {
    return response.json().then(json => {
        if (!response.ok) {
            const errorMessage = json || response.statusText;
            return Promise.reject(errorMessage);
        }
        history.push("/");
        return json;
    });
}

function login(username, password) {
  return dispatch => {
    const postData = {username: username, password: password}
    fetch("URL", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(handleResponse)
        .then(user => dispatch(authConsts.LOGIN_SUCCESS, user), error => dispatch(authConsts.LOGIN_FAILURE, error));
    if (username === 'admin' && password === 'admin') localStorage.setItem("user", "admin");
  }
}