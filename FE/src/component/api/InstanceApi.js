import axios from "axios";
const baseURL = "http://localhost:8080/api/v1/user";
let jwtToken = null;

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {},
});

instance.interceptors.request.use(
  function (config) {
    if (jwtToken) {
      config.headers["Authorization"] = `Bearer ${jwtToken}`;
    }
    return config;
  },
  (error) => {
    console.log("Instance error: ", error);
    return Promise.reject(error);
  }
);

export default instance;
export { baseURL };
export function setJwtToken(token) {
  jwtToken = token;
  //   instance.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
}
