import NewsTitleSection from "../NewsTitleSection";
import MainNewsSection from "../MainNewsSection";
import ReadInfoNewsSection from "../ReadInfoNewsSection";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import NavigationSectionProducts from '../NavigationSectionProducts';
import {myContext} from '../../context/myContext';
function PageNewsMain() {
 
  return (
    <> 
    <Header/>
    <NavigationSectionProducts />
    <myContext.Provider value="Линия Сталина: суровый отдых в усадьбах на сутки ">
      <NewsTitleSection />
      <MainNewsSection />
      <ReadInfoNewsSection />
      </myContext.Provider>
    <Footer/>
    </>
  );
}
export default PageNewsMain;
