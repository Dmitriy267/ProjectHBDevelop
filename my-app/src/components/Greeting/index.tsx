import React from "react";
import UserGreeting from '../../containers/UserGreeting';
import GuestGreeting from '../GuestGreeting';
function Greeting ({isLoggedIn}:{isLoggedIn:boolean}){
if (isLoggedIn){
    return <UserGreeting user='' />
}
return <GuestGreeting />
}
export default Greeting;