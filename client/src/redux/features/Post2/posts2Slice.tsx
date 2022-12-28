import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';


interface postSelectorProps{
    posts2:{
    posts2:[{
        id:number;
        imgSrc:string;
      title:string;
      description:string;
      altTitle:string;
    }]
}
}
export interface PostsState{
    posts2:[];
   status:string;
   ErrorGet:boolean;
  
   
}  
const initialState:PostsState={
    posts2:[],
    status:'',
    ErrorGet:false
}
export const posts2Slice=createSlice({
    name:'posts2',
    initialState,
    reducers:{
        createPostArticles:(state, action)=>{
            state.posts2=action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPosts2.pending, (state)=>{
state.status='loading';
state.ErrorGet=false;
})
.addCase(fetchPosts2.fulfilled, (state, action)=>{
    state.status='resolved';
    state.ErrorGet=false;
    state.posts2=action.payload;
})
.addCase(fetchPosts2.rejected, (state)=>{
    state.status='reject';
    state.ErrorGet=true;
   
})

    },
    
      
})

export  const fetchPosts2=createAsyncThunk(
  'posts2/fetchPosts2',
  async function () {
   
    const response = await fetch('/articlHome');
    const articles=await response.json();
    return articles;
}
     
)

export const {createPostArticles}=posts2Slice.actions;
export const post2Selector=(state: postSelectorProps)=>state.posts2.posts2;

export default posts2Slice.reducer;