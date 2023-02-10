import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from '../../store';
import {Minsk} from '../../models/models';


interface MinskStateInit {
    minskRooms:Minsk[];
    loading:boolean;
    hasErrors:string;
}
const initialState:MinskStateInit={
    loading: false,
    hasErrors: '',
    minskRooms:[],
   
   
}
export const cityMinskRoomSlice=createSlice({
    name: 'MinskRooms',
    initialState,
    reducers:{
        getMinskRooms:(state)=>{
            state.loading=true
        },
         getRoomsSuccess:(state, action:PayloadAction<Minsk[]>)=>{
            state.loading=false;
         state.minskRooms=action.payload;
      
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
           const res=await axios.get('/minsk/roomsOne')
           console.log(res)
           console.log(getRoomsSuccess(res.data))
          
           dispatch(cityMinskRoomSlice.actions.getRoomsSuccess(res.data))     
        }
        catch(e){
            dispatch(cityMinskRoomSlice.actions.getMinskRoomsError(e as Error))

        }

    }
}

export const FetchMinskRooms2=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(cityMinskRoomSlice.actions.getMinskRooms()) 
           const res=await axios.get('/minsk/roomsTwo')
           console.log(res)
           console.log(getRoomsSuccess(res.data))
          
           dispatch(cityMinskRoomSlice.actions.getRoomsSuccess(res.data))     
        }
        catch(e){
            dispatch(cityMinskRoomSlice.actions.getMinskRoomsError(e as Error))

        }

    }
}
export const FetchMinskRooms3=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(cityMinskRoomSlice.actions.getMinskRooms()) 
           const res=await axios.get('/minsk/roomsThree')
           console.log(res)
           console.log(getRoomsSuccess(res.data))
          
           dispatch(cityMinskRoomSlice.actions.getRoomsSuccess(res.data))     
        }
        catch(e){
            dispatch(cityMinskRoomSlice.actions.getMinskRoomsError(e as Error))

        }

    }
}
export const FetchMinskRooms4=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(cityMinskRoomSlice.actions.getMinskRooms()) 
           const res=await axios.get('/minsk/roomsFour')
           console.log(res)
           console.log(getRoomsSuccess(res.data))
          
           dispatch(cityMinskRoomSlice.actions.getRoomsSuccess(res.data))     
        }
        catch(e){
            dispatch(cityMinskRoomSlice.actions.getMinskRoomsError(e as Error))

        }

    }
}
export const FetchMinskRooms5=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(cityMinskRoomSlice.actions.getMinskRooms()) 
           const res=await axios.get('/minsk/roomsFive')
           console.log(res)
           console.log(getRoomsSuccess(res.data))
          
           dispatch(cityMinskRoomSlice.actions.getRoomsSuccess(res.data))     
        }
        catch(e){
            dispatch(cityMinskRoomSlice.actions.getMinskRoomsError(e as Error))

        }

    }
}


export const {getMinskRooms, getRoomsSuccess, getMinskRoomsError }=cityMinskRoomSlice.actions;
export const cityMinskRoomSelector=(state:MinskStateInit)=>state.minskRooms;
export default cityMinskRoomSlice.reducer;