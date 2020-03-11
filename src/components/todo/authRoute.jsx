import React,{ Component } from "react";
import {Route, Redirect } from "react-router-dom";
import Authserv from './auth'

class AuthRoute extends Component{
    render(){
        if(Authserv.isLogin()){
            return <Route {...this.props}/>
        }else{
            return <Redirect to="/login" />
        }
    }
}
export default AuthRoute