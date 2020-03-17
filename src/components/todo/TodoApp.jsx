import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import AuthRoute from './authRoute'
import {LoginComponent,LogoutComponent} from './login'
import ListTodoComponet from './list'
import HeaderComponent from './head'
import FooterComponent from './footer'
import HelloWorldService from '../../api/todo/HelloWorldService'
import TodoCP from './todoCP'

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
                            <AuthRoute path="/todos/:id" component={TodoCP} />
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
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this);
        this.state = {
            welcomeMessage : ''
        }
        this.handlerOkResponse=this.handlerOkResponse.bind(this);
        this.handlerErrorResponse=this.handlerErrorResponse.bind(this);
    }
    render(){
        return(
            <>
                <h1>Bem-vindo</h1>
                <div className="container">Olá {this.props.match.params.name}. Veja sua lista a fazer <Link to="/todo">aqui</Link></div>
                <div className="container">
                    Veja sua primera chamada via API (spring boot) aqui
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Chamada API</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>

        )
    }

    retrieveWelcomeMessage(){
        //HelloWorldService.executeHelloWorldService()
       // .then(response => this.handlerOkResponse(response))
        //.catch(response => this.handlerErrorResponse(response))
        HelloWorldService.executeHelloWorldPathVariableService('Cristiano')
        .then(response => this.handlerOkResponse(response))
        .catch(error => this.handlerErrorResponse(error))
    }
    handlerOkResponse(response){
        this.setState({welcomeMessage: response.data.message})
        
    }
    
    handlerErrorResponse(error){
        console.log(error.response);
        this.setState({welcomeMessage: error.response.data.message})
        
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