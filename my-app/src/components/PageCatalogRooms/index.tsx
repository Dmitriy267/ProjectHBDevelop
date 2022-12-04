import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavigationSectionProducts from "../NavigationSectionProducts";
import PanelNavigationOptions from '../PanelNavigationOptions';
import ComponentCatalogRooms from '../ComponentCatalogRooms';
function PageCatalogRooms (){
    return (
        <>
        <Header/>
        <NavigationSectionProducts/>
        <PanelNavigationOptions/>
        <ComponentCatalogRooms/>
        <Footer/>
        </>
    )
}

export default PageCatalogRooms;