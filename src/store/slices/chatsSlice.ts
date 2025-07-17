import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IChat } from "../../Interfaces/IChat.ts";

export interface IChatSlice {
  messages: IChat[];
}

const initialState: IChatSlice = {
  messages: [],
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setChats: (state, chats: PayloadAction<IChat[]>) => {
      state.messages = chats.payload;
    },
  },
});

export const { setChats } = chatsSlice.actions;
export default chatsSlice.reducer;
