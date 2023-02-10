import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from '../redux/features/User/userSlice';
import  postsReducer  from '../redux/features/Post/postsSlice';
import tabRoomsReducer from '../redux/features/TabRooms/tabRoomsSlice';
import cityMinskRoomReduser from '../redux/features/CityMinskRoom/cityMinskRoomSlice';
import titleCityReduser from '../redux/features/TitleCity/titleCitySlice';
export const store= configureStore({
  reducer: {
    user:userReducer,
    posts:postsReducer,
    tabRoom:tabRoomsReducer,
    cityMinskRoom:cityMinskRoomReduser,
    titleCity:titleCityReduser,
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch