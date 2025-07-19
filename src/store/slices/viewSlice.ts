import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { VIEW } from "../../enums/View.ts";

interface IViewSlice {
  activeView: VIEW;
}

const initialState = {
  activeView: VIEW.CHAT,
} as IViewSlice;

const ViewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<VIEW>) => {
      state.activeView = action.payload;
    },
  },
});

export const { setView } = ViewSlice.actions;
export default ViewSlice.reducer;
