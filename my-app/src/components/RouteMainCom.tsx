import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import NavigationSectionProducts from './NavigationSectionProducts';
const  RouteMainCom =()=>{
    return (
<>
<Header/>
<NavigationSectionProducts />
<Outlet/>
<Footer/>
</>
    )
}

export {RouteMainCom}