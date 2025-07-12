import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface StarterState {
  title: string;
}

const initialState: StarterState = {
  title: "Starter",
};

export const starterSlice = createSlice({
  name: "starter",
  initialState,
  reducers: {
    changeStarter: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { changeStarter } = starterSlice.actions;
export default starterSlice.reducer;
