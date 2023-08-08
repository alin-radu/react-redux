import { AxiosRequestConfig } from 'axios';

import { axiosInstancePosts as axiosInstance } from '../../../app/axios';

import { endpointsPosts as endpoints } from '../../../app/axios/constants';

import { Post_Draft } from './../types/index';

export const getPostsAPI = async (): Promise<void> => {
  const request: AxiosRequestConfig = {
    url: endpoints.posts,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return await axiosInstance(request);
};

export const addPostAPI = async (data: Post_Draft) => {
  const request: AxiosRequestConfig = {
    url: endpoints.posts,
    method: 'POST',
    data: data,
    headers: { 'Content-Type': 'application/json' },
  };
  return await axiosInstance(request);
};
