import React from 'react';
import './styles.css';
import "./styles.scss";
//import './App.css';
//import Header from "./components/Header";
//import NavigationSectionProducts from "./components/NavigationSectionProducts";
//import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom';
import PageNewsMain from './components/PageNewsMain';
import PageNewsList from './components/PageNewsList';
import { RouteMainCom } from './components/RouteMainCom/RouteMainCom';
import NotfoundPage from './components/NotfoundPage';
import ContactsPage from './components/ContactsPage';
import {RouteMainAvtorization} from './components/RouteMainAvtorization/RouteMainAvtorization';
//import PageAvtorization from './components/PageAvtorization';
function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path='/' element={<RouteMainCom/>}>
          <Route path='/Новость' element={<PageNewsMain />} />
          <Route path='/Новости' element={<PageNewsList />} />
          <Route path='/Контактная' element={<ContactsPage />} />
          <Route path='*' element={<NotfoundPage/>} />
          </Route>
          <Route path='/Вход и регистрация' element={<RouteMainAvtorization/>}>
          
          </Route>
      </Routes>
  
      
    </div>
  );
}


export default App;
