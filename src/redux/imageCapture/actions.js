import { IMAGE_CAPTURED, SAVE_IMAGE } from "./actionTypes";

export const imageCaptured = () => {
  return {
    type: IMAGE_CAPTURED
  };
};

export const saveImageUrl = payload => {
  return {
    type: SAVE_IMAGE,
    payload
  };
};
