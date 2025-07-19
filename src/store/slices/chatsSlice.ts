import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { CHATS_KEY, type IChat } from "../../Interfaces/IChat.ts";
import type { PromptRetry } from "../../Interfaces/PayloadActions.ts";
import { get, set } from "lockr";

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
        // try to remove retry status on prompts
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

      const newChatList = [...chats, action.payload];

      updateLocalStorage(newChatList);
      state.messages = newChatList;
    },

    updateAiBusy: (state, action: PayloadAction<boolean>) => {
      state.isAiBusy = action.payload;
    },

    updatePromptRetry: (state, action: PayloadAction<PromptRetry>) => {
      const chats = [...state.messages];

      const updatedChats = chats.map((chat) => {
        if (chat.timestamp === action.payload.timestamp) {
          chat.shouldRetry = true;
        }

        return chat;
      });

      updateLocalStorage(updatedChats);
      state.messages = updatedChats;
    },
  },
});

const updateLocalStorage = (chatList: IChat[]) => {
  const sessionId = chatList[0].sessionId;
  const lockrChats = get(CHATS_KEY);
  if (lockrChats) {
    const lockrUpdate = { ...lockrChats };
    lockrUpdate[sessionId] = chatList;

    set(CHATS_KEY, lockrUpdate);
  } else {
    const lockrUpdate: Record<string, IChat[]> = { [sessionId]: chatList };

    set(CHATS_KEY, lockrUpdate);
  }
};

export const { setChats, addPrompt, updatePromptRetry, updateAiBusy } =
  chatsSlice.actions;
export default chatsSlice.reducer;
