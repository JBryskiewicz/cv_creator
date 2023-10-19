import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Information } from "../types/types";

const initialState: Information = {
  step: 1,
  name: "",
  email: "",
  phoneNumber: "",
};

const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    RESET_STATE: () => initialState,
  },
});

export default informationSlice.reducer;
export const { setStep, setName, setEmail, setPhoneNumber, RESET_STATE } =
  informationSlice.actions;
