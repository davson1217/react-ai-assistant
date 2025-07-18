import { configureStore } from "@reduxjs/toolkit";
import StarterSlice from "./slices/starterSlice.ts";
import ChatsSlice from "./slices/chatsSlice.ts";
import { AiSlice } from "./slices/aiSlice.ts";

export const store = configureStore({
  reducer: {
    starter: StarterSlice,
    chats: ChatsSlice,
    Ai: AiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
