import { configureStore } from "@reduxjs/toolkit";
import ChatsSlice from "./slices/chatsSlice.ts";

export const store = configureStore({
  reducer: {
    chats: ChatsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
