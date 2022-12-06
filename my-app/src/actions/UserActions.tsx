import { Action, Dispatch } from "redux";

export const GET_LOGIN = 'GET_LOGIN';
export const NOT_LOGIN = 'NOT_LOGIN';
export function UserActions (){
   return function(dispatch:Dispatch<Action>){
      const lsdata=localStorage.getItem('keyLoginUser');
     dispatch({
      type:GET_LOGIN,
      payload:lsdata,
     })
   
   }
}