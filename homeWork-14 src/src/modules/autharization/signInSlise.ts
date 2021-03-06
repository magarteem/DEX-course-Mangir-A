import { createSlice } from "@reduxjs/toolkit";
import { signInThunk } from "../../core/redux/thunk/SignInThunk";
import { signUpThunk } from "../../core/redux/thunk/SignUpThunk";

const initialState = {
  isAuth: false,
};

const signInSlise = createSlice({
  name: "autharization",
  initialState,
  reducers: {
    login(state) {
      //  state.isAuth = true;
      console.log("222222");
      console.log(state.isAuth);
    },
  },

  extraReducers: {
    [signInThunk.pending.type]: (state) => {},
    [signInThunk.fulfilled.type]: (state, actions) => {
      state.isAuth = true;
      console.log("1111");
      console.log(actions);
    },
    [signInThunk.rejected.type]: (state, actions) => {},

    //===============

    [signUpThunk.pending.type]: (state) => {},
    [signUpThunk.fulfilled.type]: (state, actions) => {
      //state.isAuth = true;
      console.log("рагистрация успешна");
      console.log(actions);
    },
    [signUpThunk.rejected.type]: (state, actions) => {},
  },
});

export const { login } = signInSlise.actions;
export default signInSlise.reducer;
