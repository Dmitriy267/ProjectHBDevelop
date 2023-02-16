import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

export interface TitleCityState{
    nameTiitleCity:string;

}
const initialState:TitleCityState={
    nameTiitleCity:'',
   
}
export const titleCitySlice=createSlice({
    name:'titleCity',
    initialState,
    reducers:{
        getTitleCity:(state, action:PayloadAction<string>)=>{
state.nameTiitleCity=action.payload;

        }
    }
})


export const {getTitleCity}=titleCitySlice.actions;
export const titleCitySelector=(state:TitleCityState)=>state.nameTiitleCity;
export default titleCitySlice.reducer;