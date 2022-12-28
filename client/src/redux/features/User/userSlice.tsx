import { createSlice } from '@reduxjs/toolkit';

interface selectUserLoginProps{
  user:{
    user:{
      login:string;
    }
  }
}
export const userSlice=createSlice({
    name:'user',
    initialState: {
        user:null
      },
      reducers:{
        userLogin:(state, action)=>{
            state.user=action.payload;
        }
      }
})

export const {userLogin}=userSlice.actions;
export const selectUser=(state: { user: { user: object; }; })=>state.user.user;
export const selectUserLogin=(state:selectUserLoginProps)=>state.user.user.login;

export default userSlice.reducer;