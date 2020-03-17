import React, {Component} from 'react'
import AuthServ from './auth'

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            username:'jirous',
            password:'asdfg',
            hasLoginFailed: false,
            showSuccessMessage: false

        }
        //this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        //this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        
    }

    handlerChange(event){
        //console.log(this.state); //event.target.value
        this.setState({
            [event.target.name]:event.target.value
        })
    }   
    /*
    handlerPasswordChange(event){
        console.log(event.target.value);
        this.setState({password:event.target.value})
    }    
    */
   loginClicked(){
        if(this.state.username==="jirous" && this.state.password==="asdfg"){
            //console.log('Sucesso')
            AuthServ.registerLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
           // this.setState({showSuccessMessage:true})
           // this.setState({hasLoginFailed:false})

        }else{
            console.log('Erro')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }   
        console.log(this.state); //event.target.value
    }
     

    render(){
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
                    {/*<ShowLoginSucess showSuccessMessage={this.state.showSuccessMessage} />*/}
                    {this.state.showSuccessMessage && <div>Login Sucedido</div>}
                    {this.state.hasLoginFailed && <div className="alert alert-danger">Dados Inválidos</div>}
                    Usuário: <input type="text" name="username"  value={this.state.username} onChange={this.handlerChange} />
                    Senha: <input type="password" name="password" value={this.state.password} onChange={this.handlerChange}/>
                    <button className="btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }    
}


class LogoutComponent extends Component{
    render(){
        return(
            <div> 
                <h1>Logout feito com sucesso</h1>
                <div className="container">
                    Obrigado por usar a aplicação
                </div>
            </div>
        )
    }
}

export {LoginComponent,LogoutComponent}
