import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import axios from 'axios';
import {Rooms} from '../../models/models';
import { AppDispatch } from '../../store';
export interface  roomsState{
    tabRooms:Rooms[]
   loading:boolean;
   hasErrors:string;
}
const initialState:roomsState={
    tabRooms:[],
loading:false,
hasErrors:'',
}
export const tabRoomsSlice=createSlice({
    name:'tabRooms',
    initialState,
    reducers:{
        getRooms:(state)=>{
            state.loading=true
        },
         getRoomsSuccess:(state, action:PayloadAction<Rooms[]>)=>{
            state.loading=false;
            state.tabRooms=action.payload

         },
        getRoomsError:(state, action:PayloadAction<Error>)=>{
            state.loading=false
            state.hasErrors=action.payload.message
        }
    }
}
)
export const FetchTabsRooms=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(tabRoomsSlice.actions.getRooms())
           const res=await axios.get('/tabs')
           console.log(res)
           dispatch(tabRoomsSlice.actions.getRoomsSuccess(res.data.results))

        }
        catch(e){
            dispatch(tabRoomsSlice.actions.getRoomsError(e as Error))

        }

    }
}

export const {getRooms, getRoomsSuccess, getRoomsError}=tabRoomsSlice.actions;
export default tabRoomsSlice.reducer;
export const tabRoomsSelector=(state:roomsState)=>state.tabRooms;

