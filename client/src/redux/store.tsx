import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from '../redux/features/User/userSlice';
import  postsReducer  from '../redux/features/Post/postsSlice';
import posts2Reducer  from '../redux/features/Post2/posts2Slice';
import posts3Reducer  from '../redux/features/Post3/posts3Slice';
import posts4Reducer  from '../redux/features/Post4/posts4Slice';
export const store= configureStore({
  reducer: {
    user:userReducer,
    posts:postsReducer,
    posts2:posts2Reducer,
    posts3:posts3Reducer,
    posts4:posts4Reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch