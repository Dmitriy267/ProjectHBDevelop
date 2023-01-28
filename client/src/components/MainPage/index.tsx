import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import NavigationSectionProducts from '../NavigationSectionProducts';
import BlockCategoriesMain from '../BlockCategoriesMain';
import HotsInfoSection from '../HotsInfoSection';
import SectionMainPageCardsSlids from '../SectionMainPageCardsSlids';
import InfoAdsMapSection from '../InfoAdsMapSection';
import InfoBlockRoomsNews from '../InfoBlockRoomsNews'
function MainPage (){
    return(
        <>
        <Header />
        <NavigationSectionProducts />
        <BlockCategoriesMain/>
        <HotsInfoSection/>
        <SectionMainPageCardsSlids/>
        <InfoAdsMapSection/>
        <InfoBlockRoomsNews/>
        <Footer />
        </>
    )
}
export default MainPage;