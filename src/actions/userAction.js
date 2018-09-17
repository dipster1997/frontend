import { history } from "../common/history";

export const userActions = {
  login
}

function login(username, password) {
  return dispatch => {
    console.log("Username: " + username + ", Password: " + password);
    dispatch({type: "TEST"});
    history.push("/");
    if (username === 'admin' && password === 'admin') localStorage.setItem("user", "admin");
  }
}