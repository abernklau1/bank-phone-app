import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
} from "./actions";

export const displayAlert = () => {
  return {
    type: DISPLAY_ALERT,
  };
};

export const clearAlert = () => {
  return {
    type: CLEAR_ALERT,
  };
};
