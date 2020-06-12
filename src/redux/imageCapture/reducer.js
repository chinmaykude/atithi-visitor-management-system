import { SAVE_IMAGE } from "./actionTypes";

const initialState = {
  data: [],
  isCaptureDone: false,
  capturedUrl: ""
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_IMAGE:
      return {
        ...state,
        isCaptureDone: !state.isCaptureDone,
        capturedUrl: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
