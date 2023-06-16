import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";
import { useDispatch } from "redux";

// Inside your component or function
// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch = useDispatch();

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};
export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

export const boundLogin = (username, password) => {
  return dispatch(login(username, password));
};

export const boundLogout = () => {
  return dispatch(logout());
};

export const boundDisplayNotificationDrawer = () => {
  return dispatch(displayNotificationDrawer());
};

export const boundHideNotificationDrawer = () => {
  return dispatch(hideNotificationDrawer());
};

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login()); // Dispatching the login action

    try {
      const response = await fetch("/login-success.json"); // Making the API request
      const data = await response.json();

      if (response.ok) {
        dispatch(loginSuccess()); // Dispatching the loginSuccess action if the API request succeeds
      } else {
        dispatch(loginFailure()); // Dispatching the loginFailure action if the API request fails
      }
    } catch (error) {
      dispatch(loginFailure()); // Dispatching the loginFailure action if there's an error in the API request
    }
  };
};
