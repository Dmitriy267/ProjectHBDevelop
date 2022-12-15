import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavigationSectionProducts from "../NavigationSectionProducts";
import PanelNavigationOptions from '../PanelNavigationOptions';
import SectionRoomsList from '../SectionRoomsList';
import ResultRoomsSection from '../ResultRoomsSection';
function PageCatalogRooms (){
    return (
        <>
        <Header/>
        <NavigationSectionProducts/>
        <SectionRoomsList/>
        <PanelNavigationOptions/>
        <ResultRoomsSection/>
        <Footer/>
        </>
    )
}

export default PageCatalogRooms;