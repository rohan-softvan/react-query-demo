import axios from "axios";
import { apiResponseEnum } from "../enums/apiResponse.enum";

export function setupAxios(axios) {
  // axios.interceptors.request.use(
  //     (config) => {
  //       const accessToken = getAccessToken();
  //       if (accessToken) {
  //         config.headers.Authorization = `Bearer ${accessToken}`;
  //       }
  //       return config;
  //     },
  //     (err) => Promise.reject(err)
  // );
  axios.interceptors.response.use(
    (response) => {
      // if (response.config.headers && response.headers.authorization) {
      //   setToken({
      //     access_token: response.headers.authorization,
      //   });
      // }
      return response.data || [];
    },
    async (error) => {
      let response = {
        status: false,
        message: apiResponseEnum.SOMETHING_WRONG,
      };
      if (error && error.response) {
        if (error && error.response && error.response.status === 401) {
          response.message = apiResponseEnum.TOKEN_EXPIRED;
          response.status = true;
          throw response;
        } else if (error && error.response && error.response.status === 403) {
          //access denied page
          return error.response.data;
        } else if (error && error.response && error.response.status === 503) {
          return error.message;
        } else if (error.response.data && error.response.data.message) {
          response = error.response.data ? error.response.data : response;
          // throw response;
          return response;
        } else {
          throw response;
        }
      } else if (
        error &&
        error.toString() &&
        error.toString().includes("Network Error")
      ) {
        // window.location.href = process.env.PUBLIC_URL + "/";
        throw response;
      } else if (
        error &&
        error.toString() &&
        error.toString().includes("Cancel")
      ) {
        response = error;
        throw response;
      } else {
        throw response;
      }
    }
  );
}

export const request = (options) => {
  const config = {
    headers: { "Content-Type": "application/json", ...options?.headers },
    url: options["url"],
    method: options["method"],
  };

  if (options["body"]) {
    config["data"] = options["body"];
  }
  if (options["params"]) {
    config["params"] = options["params"];
  }

  if (navigator.onLine) {
    return axios.request(config);
  } else {
    let response;
    response = {
      status: false,
      message: apiResponseEnum.INTERNET_DISCONNECTED,
    };

    return response;
  }
};
