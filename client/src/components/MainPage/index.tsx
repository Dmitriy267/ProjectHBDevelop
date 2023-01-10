import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import NavigationSectionProducts from '../NavigationSectionProducts';
import BlockCategoriesMain from '../BlockCategoriesMain';
function MainPage (){
    return(
        <>
        <Header />
        <NavigationSectionProducts />
        <BlockCategoriesMain/>
        <Footer />
        </>
    )
}
export default MainPage;