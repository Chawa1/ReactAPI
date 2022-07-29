import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: 'John',
  role: 'admin',

};

const userSlice = createSlice({
    name: 'user', /* must be a string */
  initialState,
  reducers: {
    clearUser: (state) => {
        state.username = '';
        state.role = '';
      },
      updateUsername: (state, action) => {
        state.username = action.payload;
      },
      updateRole: (state, action) => {
        state.role = action.payload;
      },


  }
});

export const { clearUser, updateUsername, updateRole } = userSlice.actions;

export default userSlice.reducer;