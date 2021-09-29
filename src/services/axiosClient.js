import axios from "axios";
import qs from "query-string";


// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxMSIsIkhldEhhblN0cmluZyI6IjIxLzAyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NTQwMTYwMDAwMCIsIm5iZiI6MTYxODI0NjgwMCwiZXhwIjoxNjQ1NTQ5MjAwfQ.5mU9BqyLzddQpvu47bSES-4soazP--DtpP9aqF-U6wQ"


const axiosClient =  axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/api/",
    headers: {'TokenCybersoft': process.env.REACT_APP_TOKEN},
    // headers: {'TokenCybersoft': token},
    paramsSerializer: (params) => {
        return qs.stringify(
            params,{
                skipEmptyString: true,
                skipNull: true
            }
        )
    }
})


// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    if (localStorage.getItem("user")) {
        const {accessToken} = JSON.parse(localStorage.getItem("user"))
        config.headers.Authorization = 'Bearer ' + accessToken;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient
