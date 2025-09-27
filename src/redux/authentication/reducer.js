import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REGISTER_COMPANY_REQUEST,
  REGISTER_COMPANY_SUCCESS,
  REGISTER_COMPANY_FAILURE,
  SET_AUTHENTICATION
} from "./actionTypes";

const initState = {
  isAuth: false,
  isLoading: false,
  error: "",
  companyUserDetails: [],
  visitorDetailsList: []
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_COMPANY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case REGISTER_COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        companyUserDetails: [...state.companyUserDetails, payload]
      };
    case REGISTER_COMPANY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        error: ""
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        error: payload
      };
    case SET_AUTHENTICATION:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        error: ""
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        error: ""
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: "Failed to logout"
      };
    default:
      return state;
  }
};

export default reducer;
