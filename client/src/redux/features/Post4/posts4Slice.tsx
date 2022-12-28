import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';


interface postSelectorProps{
    posts4:{
    posts4:[{
        id:number;
        imgSrc:string;
      title:string;
      description:string;
      altTitle:string;
    }]
}
}
export interface PostsState{
    posts4:[];
   status:string;
   ErrorGet:boolean;
  
   
}  
const initialState:PostsState={
    posts4:[],
    status:'',
    ErrorGet:false
}
export const posts3Slice=createSlice({
    name:'posts4',
    initialState,
    reducers:{
        createPostArticles:(state, action)=>{
            state.posts4=action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPosts4.pending, (state)=>{
state.status='loading';
state.ErrorGet=false;
})
.addCase(fetchPosts4.fulfilled, (state, action)=>{
    state.status='resolved';
    state.ErrorGet=false;
    state.posts4=action.payload;
})
.addCase(fetchPosts4.rejected, (state)=>{
    state.status='reject';
    state.ErrorGet=true;
   
})

    },
    
      
})

export  const fetchPosts4=createAsyncThunk(
  'posts4/fetchPosts4',
  async function () {
   
    const response = await fetch('/articlDefaultManor');
    const articles=await response.json();
    return articles;
}
     
)

export const {createPostArticles}=posts3Slice.actions;
export const post4Selector=(state: postSelectorProps)=>state.posts4.posts4;

export default posts3Slice.reducer;