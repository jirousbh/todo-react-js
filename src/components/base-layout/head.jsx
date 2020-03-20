import React,{ Component } from "react";
import AuthServ from '../todo/auth'
import {BrowserRouter as Router, withRouter,Route, Switch, Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'


class HeaderComponent extends Component{
    render(){
        const isLoggedIn = AuthServ.isLogin();


        return(
            <Navbar variant="dark" expand="lg" style={{backgroundColor:"#53C279"}}>
            <Navbar.Brand href="#home">Criptonita</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">              
                {isLoggedIn && <Nav.Link componentClass={Link} href="/welcome/jirous" to="/welcome/jirous" active={window.location.pathname === '/welcome/jirous'}>Home</Nav.Link>}
                {isLoggedIn && <Nav.Link componentClass={Link} href="/todo" to="/todo" active={window.location.pathname === '/todo'}>Lista</Nav.Link>}
                {!isLoggedIn && <Nav.Link componentClass={Link} href="/login" to="/login" active={window.location.pathname === '/login'}>Login</Nav.Link>}
                {isLoggedIn && <Nav.Link componentClass={Link} href="/logout" to="/logout" active={window.location.pathname === '/logout'}  onClick={AuthServ.logout}>Logout</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default withRouter(HeaderComponent);