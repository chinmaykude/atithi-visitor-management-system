import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_COMPANY_REQUEST,
  REGISTER_COMPANY_SUCCESS,
  REGISTER_COMPANY_FAILURE
} from "./actionTypes";
import axios from "../../utils/axiosInterceptor";
import firebase from "../../config/fbaseConfig";

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const loginUserFailure = payload => ({
  type: LOGIN_USER_FAILURE,
  payload
});

export const loginUser = ({ email, password, history }) => dispatch => {
  dispatch(loginUserRequest());

  console.log("history", email, password, history);
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      console.log("token", token);
      dispatch(loginUserSuccess(token));
      setAuthorizationHeader(token);
      history.push("/main_checkin_checkout");
    })
    .catch(error => {
      // Handle Errors
      const errorCode = error.code;
      let errorMessage = "Something went wrong. Please try again.";
      if (errorCode === "auth/wrong-password" || "auth/invalid-email") {
        errorMessage = "Please check the entered credentials.";
        alert(errorMessage);
      } else if (errorCode === "auth/user-not-found") {
        errorMessage = "No user corresponding to the given email.";
        alert(errorMessage);
      } else {
        alert(errorMessage);
      }
      dispatch(loginUserFailure(errorMessage));
    });
};

export const companyRegisterRequest = payload => ({
  type: REGISTER_COMPANY_REQUEST,
  payload
});

export const companyRegisterSuccess = payload => ({
  type: REGISTER_COMPANY_SUCCESS,
  payload
});

export const companyRegisterFailure = payload => ({
  type: REGISTER_COMPANY_FAILURE,
  payload
});

export const companyRegister = payload => dispatch => {
  dispatch(companyRegisterRequest());

  firebase
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(authData => {
      dispatch(companyRegisterSuccess(payload));
      payload.history.push("/login");
      return alert(`
          Successfully registered..!!
          Please login to continue.
          `);
    })
    .catch(error => {
      const errorMessage = error.message;
      dispatch(companyRegisterFailure(errorMessage));
      return alert(errorMessage);
    });
};

export const logoutUserRequest = () => ({
  type: LOGOUT_USER_REQUEST
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS
});

export const logoutUserFailure = () => ({
  type: LOGOUT_USER_FAILURE
});

export const logoutUser = () => {
  return dispatch => {
    dispatch(logoutUserRequest());

    localStorage.removeItem("FBIdToken");
    localStorage.removeItem("visitDataFetched");
    dispatch(logoutUserSuccess());
    // return axios
    //   .post(
    //     "/logout",
    //     {},
    //     {
    //       headers: {
    //         Authorization: payload.token
    //       }
    //     }
    //   )
    //   .then(res => {
    //     dispatch(logoutUserSuccess(res));
    //   })
    //   .catch(err => dispatch(logoutUserFailure(err.message)));
  };
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common.Authorization = FBIdToken;
};
