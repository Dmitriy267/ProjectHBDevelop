import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import axios from 'axios';
import { iteratorSymbol } from 'immer/dist/internal';
import {MinskRoom} from '../../models/models';
import { AppDispatch } from '../../store';

export interface  minskState{
    minskRooms:MinskRoom[];
    loading:boolean;
    hasErrors:string;
 }
const initialState:minskState={
    loading:false,
    hasErrors:'',
    minskRooms:[]
}
export const cityMinskRoomSlice=createSlice({
    name: 'MinskRooms',
    initialState,
    reducers:{
        getMinskRooms:(state)=>{
            state.loading=true
        },
         getMinskRoomsSuccess:(state, action:PayloadAction<MinskRoom[]>)=>{
            state.loading=false;
            state.minskRooms=action.payload;
           

         },
         getFilterRoomsOne:(state, action:PayloadAction<MinskRoom[]>)=>{
            state.loading=false;
            state.minskRooms=action.payload.filter(item=>item.rooms==='1 комн.');
    
            console.log( state.minskRooms)
         },
         getFilterRoomsTwo:(state, action:PayloadAction<MinskRoom[]>)=>{
            state.loading=false;
            state.minskRooms=action.payload.filter(item=>item.rooms==='2 комн.');
         },
         getFilterRoomsThree:(state, action:PayloadAction<MinskRoom[]>)=>{
            state.loading=false;
            state.minskRooms=action.payload.filter(item=>item.rooms==='3 комн.');
         },
         getFilterRoomsFour:(state, action:PayloadAction<MinskRoom[]>)=>{
            state.loading=false;
            state.minskRooms=action.payload.filter(item=>item.rooms==='4 комн.');
         },
         getFilterRoomsFive:(state, action:PayloadAction<MinskRoom[]>)=>{
            state.loading=false;
            state.minskRooms=action.payload.filter(item=>item.rooms==='5 комн.');
         },
        getMinskRoomsError:(state, action:PayloadAction<Error>)=>{
            state.loading=false
            state.hasErrors=action.payload.message
        }
        



    }
})
export const FetchMinskRooms=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(cityMinskRoomSlice.actions.getMinskRooms())
           const res=await axios.get('/minsk')
           console.log(res)
           dispatch(cityMinskRoomSlice.actions.getFilterRoomsOne(res.data))
             
        }
        catch(e){
            dispatch(cityMinskRoomSlice.actions.getMinskRoomsError(e as Error))

        }

    }
}
export const FetchMinskRoomsTwo=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(cityMinskRoomSlice.actions.getMinskRooms())
           const res=await axios.get('/minsk')
           console.log(res)
           dispatch(cityMinskRoomSlice.actions.getFilterRoomsTwo(res.data))
             
        }
        catch(e){
            dispatch(cityMinskRoomSlice.actions.getMinskRoomsError(e as Error))

        }

    }
}
export const FetchMinskRoomsThree=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(cityMinskRoomSlice.actions.getMinskRooms())
           const res=await axios.get('/minsk')
           console.log(res)
           dispatch(cityMinskRoomSlice.actions.getFilterRoomsThree(res.data))
             
        }
        catch(e){
            dispatch(cityMinskRoomSlice.actions.getMinskRoomsError(e as Error))

        }

    }
}
export const FetchMinskRoomsFour=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(cityMinskRoomSlice.actions.getMinskRooms())
           const res=await axios.get('/minsk')
           console.log(res)
           dispatch(cityMinskRoomSlice.actions.getFilterRoomsFour(res.data))
             
        }
        catch(e){
            dispatch(cityMinskRoomSlice.actions.getMinskRoomsError(e as Error))

        }

    }
}
export const FetchMinskRoomsFive=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(cityMinskRoomSlice.actions.getMinskRooms())
           const res=await axios.get('/minsk')
           console.log(res)
           dispatch(cityMinskRoomSlice.actions.getFilterRoomsFive(res.data))
             
        }
        catch(e){
            dispatch(cityMinskRoomSlice.actions.getMinskRoomsError(e as Error))

        }

    }
}

export const {getMinskRooms, getMinskRoomsSuccess,getFilterRoomsOne,  getFilterRoomsTwo,  getFilterRoomsThree, getFilterRoomsFour, getFilterRoomsFive, getMinskRoomsError }=cityMinskRoomSlice.actions;
export const cityMinskRoomSelector=(state:minskState)=>state.minskRooms;
export default cityMinskRoomSlice.reducer;