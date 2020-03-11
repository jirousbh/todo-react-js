import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import AuthRoute from './authRoute'
import {LoginComponent,LogoutComponent} from './login'
import ListTodoComponet from './list'
import HeaderComponent from './head'
import FooterComponent from './footer'

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthRoute path="/welcome/:name" component={WelcomeComponet} />
                            <AuthRoute path="/todo" component={ListTodoComponet} />
                            <AuthRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
               {/* <LoginComponent />
                <WelcomeComponet />*/}
            </div>
        )
    }
}



class WelcomeComponet extends Component {
    render(){
        return(
            <>
                <h1>Bem-vindo</h1>
                <div className="container">Olá {this.props.match.params.name}. Veja sua lista a fazer <Link to="/todo">aqui</Link></div>
            </>

        )
    }



}
function ErrorComponent(){
    return <div>Endereço web inválido</div>
}

/*
function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Dados Inválidos</div>
    }
    return null
}

function ShowLoginSucess(props){
    if(props.showSuccessMessage){
        return <div>Login Sucedido</div>
    }
    return null
}
*/
export default TodoApp