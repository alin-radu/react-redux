import { postsReducer } from '../../features/posts/redux/postsSlice';
import { authReducer } from '../../features/auth/redux/authSlice';

export const rootReducer = { posts: postsReducer, auth: authReducer };
