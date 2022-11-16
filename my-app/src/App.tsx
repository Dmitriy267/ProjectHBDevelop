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
import { RouteMainCom } from './components/RouteMainCom';
import NotfoundPage from './components/NotfoundPage';

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path='/' element={<RouteMainCom/>}>
          <Route path='/Новость' element={<PageNewsMain />} />
          <Route path='/Новости' element={<PageNewsList />} />
          <Route path='*' element={<NotfoundPage titleErr='re' descripErr='rt'/>} />

          </Route>
      </Routes>
  
      
    </div>
  );
}


export default App;
