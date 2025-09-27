import axios from "axios";
import logger from "./logger";

let interceptorEnabled = false;

if (process.env.NODE_ENV !== "production") {
  interceptorEnabled = true;
}

const axiosInstance = axios.create({
  baseURL: "<Base_URL>"
});

axiosInstance.interceptors.request.use(request => {
  if (interceptorEnabled) {
    logger.log(`Request: ${request.method} ${request.baseURL}${request.url}`);
  }
  return request;
});

axiosInstance.interceptors.response.use(
  response => {
    if (interceptorEnabled) {
      logger.log("Response Status: ", response.status);
      logger.log("Response Summary: ", response.data.summary);
      logger.log("Response Content: ", response.data.data);
    }
    return response;
  },
  error => {
    logger.error("Error", error);
    return error;
  }
);

export default axiosInstance;
