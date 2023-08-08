import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

import { Post, Post_Draft } from '../types';

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: null | string;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
      state.error = null;
    },
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.loading = false;
      state.posts = action.payload;
    },
    getPostsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    },
    addPostSuccess: () => {
      console.log('%c-> developmentConsole: addPostSuccess===> ', 'color:#77dcfd');
    },
    addPostError: (_, action: PayloadAction<string>) => {
      console.log('%c-> developmentConsole: addPostError===> ', 'color:#77dcfd', action);
    },
  },
});

export const addPost = createAction<Post_Draft>('addPost');
export const { getPosts, getPostsSuccess, getPostsError, addPostSuccess, addPostError } =
  postsSlice.actions;
export const postsReducer = postsSlice.reducer;
