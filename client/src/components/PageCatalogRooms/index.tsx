import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavigationSectionProducts from "../NavigationSectionProducts";
import PanelNavigationOptions from '../PanelNavigationOptions';
import SectionRoomsList from '../SectionRoomsList';
import ResultRoomsSection from '../ResultRoomsSection';
import LocationMapRooms from '../LocationMapRooms';
function PageCatalogRooms (){
    return (
        <>
        <Header/>
        <NavigationSectionProducts/>
        <SectionRoomsList/>
        <PanelNavigationOptions/>
        <ResultRoomsSection/>
        <LocationMapRooms/>
        <Footer/>
        </>
    )
}

export default PageCatalogRooms;