import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';


interface postSelectorProps{
    posts:{
    posts:[{
        id:number;
        imgSrc:string;
      title:string;
      description:string;
      altTitle:string;
    }]
}
}
export interface PostsState{
    posts:[];
   status:string;
   ErrorGet:boolean;
  
   
}  
const initialState:PostsState={
    posts:[],
    status:'',
    ErrorGet:false
}
export const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
        createPostArticles:(state, action)=>{
            state.posts=action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPosts1.pending, (state)=>{
state.status='loading';
state.ErrorGet=false;
})
.addCase(fetchPosts1.fulfilled, (state, action)=>{
    state.status='resolved';
    state.ErrorGet=false;
    state.posts=action.payload;
})
.addCase(fetchPosts1.rejected, (state)=>{
    state.status='reject';
    state.ErrorGet=true;
   
})

    },
    
      
})

export  const fetchPosts1=createAsyncThunk(
  'posts/fetchPosts',
  async function () {
   
    const response = await fetch('/articles');
    const articles=await response.json();
    return articles;
}
     
)

export const {createPostArticles}=postsSlice.actions;
export const postSelector=(state: postSelectorProps)=>state.posts.posts;

export default postsSlice.reducer;