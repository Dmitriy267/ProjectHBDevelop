import React from "react";
import {connect} from 'react-redux';
import User from '../../components/User';
type UserGreetingProps={
    user:{
        name:string;
    }
}
function UserGreeting ({user}:UserGreetingProps){
    return(
        <User name={user.name}/>
    )
}
const mapStateToProps=(store: { user: any })=>{
    console.log(store);
return {
    user:store.user,
}
}
export default  connect (mapStateToProps) (UserGreeting);