import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/confi.js';
import { getAccessToken,getType } from '../utils/common-utils.js';

const API_URL = 'http://localhost:8000/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'content-type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  function (config) {
     if(config.TYPE.params)
      {
        config.params=config.TYPE.params;
      }
      else if(config.TYPE.query)
        {
             config.url=config.url+'/'+config.TYPE.query;
        }
    return config;
  },
  function (error) {
   
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return processResponse(response);
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code
    }
  }
}

const processError = (error) => {
 
  if (error.response) {
    console.error('ERROR IN RESPONSE:', error.toJSON());
    return{
     isError:true,
     msg:API_NOTIFICATION_MESSAGES.requestFailure,
     code:error.response
    }
   
  } else if (error.request) {
    console.error('ERROR IN REQUEST:', error.toJSON());
    return{
      isError:true,
      msg:API_NOTIFICATION_MESSAGES.requestFailure,
      code:''
     }
  } else {
    console.error('ERROR IN NETWORK:', error.toJSON());
    return{
      isError:true,
      msg:API_NOTIFICATION_MESSAGES.networkError,
      code:''
     }
  }
}


const API = {};
for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: value.method==='DELETE'?{}:body,
      responseType: value.responseType,
      headers:{
        authorization: getAccessToken()
      },
      TYPE:getType(value,body),

      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          showUploadProgress(percent);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          showDownloadProgress(percent);
        }
      }
    });
}

export { API };
