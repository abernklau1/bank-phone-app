import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
} from "./actions";

const initialState = {
  user: {},
  showAlert: false,
  alertText: "",
  alertType: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide starred values",
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    case SETUP_USER_BEGIN:
      return;
    case SETUP_USER_SUCCESS:
      return;
    case SETUP_USER_ERROR:
      return;
    default:
      return { ...state };
  }
};

export default reducer;
