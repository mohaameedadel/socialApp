"use client";
import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slices/loginSlice";
import { signupSlice } from "./slices/signupSlice";
import { posts } from "./slices/postsSlice";
import { userPosts } from "./slices/userPosts";

export const store = configureStore({
  reducer: {
    loginSlice,
    signupSlice,
    posts,
    userPosts
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
