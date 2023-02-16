import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import axios from 'axios';
import {Post} from '../../models/models';
import { AppDispatch } from '../../store';
import { current } from '@reduxjs/toolkit'
export interface PostsState{
    posts:Post[];
   loading:boolean;
   ErrorGet:string;
  
   
}  
const initialState:PostsState={
    posts:[],
    loading:false,
    ErrorGet:''
}
export const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        getPosts:(state)=>{
            state.loading=true;
        },
        createPostArticles:(state, action:PayloadAction<Post[]>)=>{
            state.loading=false;
            state.posts=action.payload.filter(item=>item.id<4);
           
        },
        createPostArticles2:(state, action:PayloadAction<Post[]>)=>{
            state.loading=false;
            state.posts=action.payload.filter(item=>item.id<=6&&item.id>3);
        },
        createPostArticles3:(state, action:PayloadAction<Post[]>)=>{
            state.loading=false;
            state.posts=action.payload.filter(item=>item.id<=9&&item.id>6);
        },
        
        getError:(state, action:PayloadAction<Error>)=>{
            state.loading=false;
            state.ErrorGet=action.payload.message
        },
       

    },
   
    
      
})

export  const fetchPost=()=>{
 
     return async  (dispatch:AppDispatch)=>{
      
        try{
            dispatch(postsSlice.actions.getPosts())
           const res=await axios.get('/articles')
           console.log(res)
           dispatch(postsSlice.actions.createPostArticles(res.data))
             
        }
        catch(e){
            dispatch(postsSlice.actions.getError(e as Error))
        }
             
     }
    
    }
export  const fetchPost2=()=>{
    return async (dispatch:AppDispatch)=>{
        try{
            dispatch(postsSlice.actions.getPosts())
           const res=await axios.get('/articles')
           console.log(res)
           dispatch(postsSlice.actions.createPostArticles2(res.data))
             
        }
        catch(e){
            dispatch(postsSlice.actions.getError(e as Error))

        }

    }
}
export  const fetchPost3=()=>{
    const error=new Error('Произошел сбой на сервере. Попробуйте ввести другое слово')
    return async (dispatch:AppDispatch)=>{
      
        try{ 
            
            dispatch(postsSlice.actions.getPosts())
           const res=await axios.get('/articles')
           console.log(res)
           dispatch(postsSlice.actions.createPostArticles3(res.data))
             
        }
        catch(error){
          
            dispatch(postsSlice.actions.getError(error as Error))

        }

    }
}



export const {createPostArticles, createPostArticles2, createPostArticles3, getPosts, getError}=postsSlice.actions;
export const postSelector=(state: PostsState)=>state.posts;
export default postsSlice.reducer;


