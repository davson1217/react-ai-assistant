import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IChat } from "../../Interfaces/IChat.ts";
import type { PromptRetry } from "../../Interfaces/PayloadActions.ts";

export interface IChatSlice {
  messages: IChat[];
  isAiBusy: boolean;
}

const initialState: IChatSlice = {
  messages: [],
  isAiBusy: false,
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setChats: (state, chats: PayloadAction<IChat[]>) => {
      state.messages = chats.payload;
    },

    addPrompt: (state, action: PayloadAction<IChat>) => {
      let chats = [...state.messages];

      if (action.payload.isUserPrompt) {
        state.isAiBusy = true;
      } else {
        // try to remove retry element
        const shouldClearRetries = chats.some((chat) => chat.shouldRetry);

        if (shouldClearRetries) {
          chats = chats.map((chat) => {
            if (chat.shouldRetry) {
              chat.shouldRetry = false;
            }
            return chat;
          });
        }
      }

      state.messages = [...chats, action.payload];
    },

    updateAiBusy: (state, action: PayloadAction<boolean>) => {
      state.isAiBusy = action.payload;
    },

    updatePromptRetry: (state, action: PayloadAction<PromptRetry>) => {
      state.messages = [...state.messages].map((chat) => {
        if (chat.timestamp === action.payload.timestamp) {
          chat.shouldRetry = true;
        }

        return chat;
      });
    },
  },
});

export const { setChats, addPrompt, updatePromptRetry, updateAiBusy } =
  chatsSlice.actions;
export default chatsSlice.reducer;
