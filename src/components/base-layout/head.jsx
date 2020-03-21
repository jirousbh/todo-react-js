import React,{ Component } from "react";
import AuthServ from '../todo/auth'
import {BrowserRouter as Router, withRouter,Route, Switch, Link} from 'react-router-dom'
import Logo from '../../logo.png'



class HeaderComponent extends Component{
    state = {
        navCollapsed: true
      }
    
      _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
      }

    render(){
        const {navCollapsed} = this.state
        const isLoggedIn = AuthServ.isLogin();


        return(

            <header>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#53C279"}}>
                <div className="container">
                <a className="navbar-brand" href="#">
                    <h3><img src={Logo} /><span class="font-face:Nexa-Bold;font-color=#FFFFFF"> CRIPTONITA <sup>beta</sup></span></h3>
                </a>                
                <button className="navbar-toggler" type="button" onClick={this._onToggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                    <ul className="navbar-nav">
                        {isLoggedIn && <li><Link className="nav-link" to="/welcome/jirous">Home</Link></li>}
                        {isLoggedIn && <li><Link className="nav-link" to="/todo">Lista</Link></li>}
                        {!isLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthServ.logout}>Logout</Link></li>}
                    </ul>  
                </div>
                </div>
                </nav>
            </header>

        )
    }
}

export default withRouter(HeaderComponent);