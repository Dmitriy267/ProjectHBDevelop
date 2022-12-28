import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';


interface postSelectorProps{
    posts3:{
    posts3:[{
        id:number;
        imgSrc:string;
      title:string;
      description:string;
      altTitle:string;
    }]
}
}
export interface PostsState{
    posts3:[];
   status:string;
   ErrorGet:boolean;
  
   
}  
const initialState:PostsState={
    posts3:[],
    status:'',
    ErrorGet:false
}
export const posts3Slice=createSlice({
    name:'posts3',
    initialState,
    reducers:{
        createPostArticles:(state, action)=>{
            state.posts3=action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPosts3.pending, (state)=>{
state.status='loading';
state.ErrorGet=false;
})
.addCase(fetchPosts3.fulfilled, (state, action)=>{
    state.status='resolved';
    state.ErrorGet=false;
    state.posts3=action.payload;
})
.addCase(fetchPosts3.rejected, (state)=>{
    state.status='reject';
    state.ErrorGet=true;
   
})

    },
    
      
})

export  const fetchPosts3=createAsyncThunk(
  'posts3/fetchPosts3',
  async function () {
   
    const response = await fetch('/articlManor');
    const articles=await response.json();
    return articles;
}
     
)

export const {createPostArticles}=posts3Slice.actions;
export const post3Selector=(state: postSelectorProps)=>state.posts3.posts3;

export default posts3Slice.reducer;