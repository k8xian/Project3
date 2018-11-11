import axios from "axios";
import { AUTH_SIGN_UP, AUTH_SIGN_OUT, AUTH_SIGN_IN, AUTH_ERROR, DASHBOARD_GET_DATA } from "./types";

/*
    Redux Path - this is my first time with it. Hope it doesn't break
    ActionCreators -> create/return Actions ({ }) -> dispatched -> middlewares -> reducers
*/

export const oauthGoogle = data => {
  return async dispatch => {
    console.log("we received", data);
    // WILL HAVE TO CHANGE THESE PATHS WHEN DEPLOYED
    const res = await axios.post("http://localhost:3001/users/oauth/google", {
      access_token: data
    });

    console.log("res", res);

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });

    localStorage.setItem("JWT_Token", res.data.token);
    axios.defaults.headers.common['Authorization'] = res.data.token;

  };
};

export const oauthFacebook = data => {
  return async dispatch => {
    console.log("we received", data);
    // WILL HAVE TO CHANGE THESE PATHS WHEN DEPLOYED
    const res = await axios.post("http://localhost:3001/users/oauth/facebook", {
      access_token: data
    });

    console.log("res", res);

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });

    localStorage.setItem("JWT_Token", res.data.token);
    axios.defaults.headers.common['Authorization'] = res.data.token;

  };
};

export const signUp = data => {
  /*
    1. Use the form data to make HTTP request to our backendand send it along [X]
        -axios is used for this step
    2. Take the backend's response (JSON Web Token is here now!) [X]
    3. Dispatch "user just signed up" (with jwt) [X]
    4. Save the jwt into our localStorage [X]
*/
  return async dispatch => {
    try {
      console.log("[ActionCreator] signUp called!");
      // WILL HAVE TO CHANGE THESE PATHS WHEN DEPLOYED
      const res = await axios.post("http://localhost:3001/users/signup", data);
      console.log("res", res);

      console.log("[ActionCreator] signUp dispatched an action!");
      dispatch({
        type: AUTH_SIGN_UP,
        payload: res.data.token // send JWT received
      });

      localStorage.setItem("JWT_Token", res.data.token);
      axios.defaults.headers.common['Authorization'] = res.data.token;

    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Email is already in use"
      });
      console.log("err", err);
    }
  };
};

export const signIn = data => {
  /*
        1. Use the form data to make HTTP request to our backendand send it along [X]
            -axios is used for this step
        2. Take the backend's response (JSON Web Token is here now!) [X]
        3. Dispatch "user just signed up" (with jwt) [X]
        4. Save the jwt into our localStorage [X]
    */
  return async dispatch => {
    try {
      console.log("[ActionCreator] signIn called!");
      // WILL HAVE TO CHANGE THESE PATHS WHEN DEPLOYED
      const res = await axios.post("http://localhost:3001/users/signin", data);
      console.log("res", res);

      console.log("[ActionCreator] signIn dispatched an action!");
      dispatch({
        type: AUTH_SIGN_IN,
        payload: res.data.token // send JWT received
      });

      localStorage.setItem("JWT_Token", res.data.token);
      axios.defaults.headers.common['Authorization'] = res.data.token;

    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Email and password combination is not valid"
      });
      console.log("err", err);
    }
  };
};

// Action to grab the secret in the backend and display it in the console
export const getSecret = () => {
  return async dispatch => {
    try {
      console.log("[ActionCreator] trying to get backend secret");
      const res = await axios.get("http://localhost:3001/users/secret");
      console.log("res", res);

      dispatch({
        type: DASHBOARD_GET_DATA,
        payload: res.data.secret
      });
    } catch (err) {
      console.error("err", err);
    }
  };
};

export const signOut = () => {
  return dispatch => {
    localStorage.removeItem("JWT_TOKEN");
    axios.defaults.headers.common['Authorization'] = '';


    dispatch({
      type: AUTH_SIGN_OUT,
      payload: ""
    });
  };
};
