import axios from 'axios';
import Config from 'react-native-config';

import webServicesConstants from '@constants/webServicesConstants';
import { WebServiceStatusEnum } from '@enums/WebServiceStatusEnum';
import { logOut } from '@redux/slices/authentSlice';
import store from '@redux/store';

export const getDefaultHeaders = () => ({
  Authorization: `Bearer ${wsSettings.token}`,
  Accept: 'application/json',
  'Content-type': 'application/json',
  'Cache-Control': 'no-cache, no-store',
});

export const getDownloadPDFHeaders = () => ({
  Authorization: `Bearer ${wsSettings.token}`,
  Accept: 'application/octet-stream',
  'Cache-Control': 'no-cache, no-store',
});

export const wsSettings = {
  token: '',
  deviceInfoHeaders: '',
};

export const defaultWSConfig = axios.create({
  baseURL: Config.BASE_URL,
  timeout: webServicesConstants.TIMEOUT,
});

defaultWSConfig.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 401) {
      store.dispatch(logOut());
    }
    return Promise.reject(error);
  },
);

export const setToken = (token: string) => {
  wsSettings.token = token;
};

export const getWebServiceStatusFromWebServiceStatusList = (
  list: WebServiceStatusEnum[],
): WebServiceStatusEnum => {
  if (list.find(status => status === WebServiceStatusEnum.ERROR)) {
    return WebServiceStatusEnum.ERROR;
  } else if (list.find(status => status === WebServiceStatusEnum.LOADING)) {
    return WebServiceStatusEnum.LOADING;
  } else {
    return WebServiceStatusEnum.SUCCESS;
  }
};
