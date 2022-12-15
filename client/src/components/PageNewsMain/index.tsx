import NewsTitleSection from "../NewsTitleSection";
import MainNewsSection from "../MainNewsSection";
import ReadInfoNewsSection from "../ReadInfoNewsSection";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import NavigationSectionProducts from '../NavigationSectionProducts';
function PageNewsMain() {
  return (
    <> <Header/>
    <NavigationSectionProducts />
      <NewsTitleSection />
      <MainNewsSection />
      <ReadInfoNewsSection />
    <Footer/>
    </>
  );
}
export default PageNewsMain;
