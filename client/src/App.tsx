import React from 'react';
import './styles.css';
import "./styles.scss";
import {Routes, Route} from 'react-router-dom';
import PageNewsMain from './components/PageNewsMain';
import PageNewsList from './components/PageNewsList';
import { RouteMainCom } from './components/RouteMainCom/RouteMainCom';
import NotfoundPage from './components/NotfoundPage';
import ContactsPage from './components/ContactsPage';
import {RouteMainAvtorization} from './components/RouteMainAvtorization/RouteMainAvtorization';
import PageRegistration from './components/PageRegistration';
import PageCatalogRooms from './components/PageCatalogRooms';
import PageEndRegistration from './components/PageEndRegistration';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path='/' element={<RouteMainCom/>}>
          <Route path='Новость' element={<PageNewsMain />} />
          <Route path='Новости' element={<PageNewsList />} />
          <Route path='Контактная' element={<ContactsPage />} />
          <Route path='Вход и регистрация' element={<RouteMainAvtorization/>}/>
          <Route path='Регистрация' element={<PageRegistration/>}/>
          <Route path='Каталог квартир' element={<PageCatalogRooms/>}/>
          <Route path='Завершение регистрации' element={<PageEndRegistration/>}/>
          <Route path='*' element={<NotfoundPage/>} />
          <Route path='Главная' element={<MainPage/>} />
          </Route>
      </Routes>
  
      
    </div>
  );
}


export default App;
