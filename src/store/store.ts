import { configureStore } from "@reduxjs/toolkit";
import StarterSlice from "./slices/starterSlice.ts";

export const store = configureStore({
  reducer: {
    starter: StarterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
