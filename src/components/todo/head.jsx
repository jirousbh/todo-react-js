import React,{ Component } from "react";
import AuthServ from './auth'
import {BrowserRouter as Router, withRouter,Route, Switch, Link} from 'react-router-dom'


class HeaderComponent extends Component{
    render(){
        const isLoggedIn = AuthServ.isLogin();


        return(

            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="#" className="navbar-brand">jirous</a></div>
                    <ul className="navbar-nav">
                        {isLoggedIn && <li><Link className="nav-link" to="/welcome/jirous">Home</Link></li>}
                        {isLoggedIn && <li><Link className="nav-link" to="/todo">Lista</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthServ.logout}>Logout</Link></li>}
                    </ul>                    
                </nav>
            </header>

        )
    }
}

export default withRouter(HeaderComponent);