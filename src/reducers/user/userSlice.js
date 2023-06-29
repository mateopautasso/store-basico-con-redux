import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    fullName: "",
    token: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
        state.email = action.payload.email;
        state.fullName = action.payload.fullName;
        state.token = action.payload.token;
    },
    logOut: (state) => {
      state.email = "";
      state.fullName = "";
      state.token = "";
  }
  }
})

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer