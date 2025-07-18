import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IClientMethods } from "../../hooks/useAI.ts";

interface IAiState {
  client: IClientMethods | null;
}

const initialState = {
  client: null,
} as IAiState;

export const AiSlice = createSlice({
  name: "AI",
  initialState,
  reducers: {
    setClient: (state, action: PayloadAction<IClientMethods>) => {
      state.client = action.payload;
    },
  },
});

export const { setClient } = AiSlice.actions;

export default AiSlice.reducer;
