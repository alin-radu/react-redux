import axios, { AxiosRequestConfig } from 'axios';

import { baseUrlPosts } from './constants';

const config: AxiosRequestConfig = { baseURL: baseUrlPosts };

export const axiosInstancePosts = axios.create(config);
