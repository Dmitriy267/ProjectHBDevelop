import { Outlet } from "react-router-dom";
import {EnterMainSection} from '../common/EnterMainSection';
const  RouteEnterCom =()=>{
    return (
<EnterMainSection>
<Outlet/>
</EnterMainSection>
    )
}

export {RouteEnterCom}