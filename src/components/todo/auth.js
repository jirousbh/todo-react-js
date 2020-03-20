import axios from 'axios'
import {API_URL} from '../../Constants'

export const USR_SESSION_ATTRIB_NAME = 'authUser'
class AuthServ{
    execBasicAuthServ(username,password){
        let basicAuthHeader='Basic '+ window.btoa(username + ":" + password)
        return axios.get(`${API_URL}/basicauth`,
        {headers: {authorization: this.createBasicAuthToken(username,password)}});
    }
    
    execJwtAuthServ(username,password){
        let basicAuthHeader='Basic '+ window.btoa(username + ":" + password)
        return axios.post(`${API_URL}/authenticate`,
        {username,password});
    }    

    createBasicAuthToken(username,password){
        return 'Basic '+ window.btoa(username + ":" + password)
    }
    registerLogin(username,password){
        sessionStorage.setItem(USR_SESSION_ATTRIB_NAME,username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }      
    createJwtToken(token){
        return 'Bearer '+ token
    }   


    registerLoginJwt(username,token){
        sessionStorage.setItem(USR_SESSION_ATTRIB_NAME,username)
        this.setupAxiosInterceptors(this.createJwtToken(token))
    }
    logout(){
        sessionStorage.removeItem(USR_SESSION_ATTRIB_NAME)
    }

    isLogin(){
        let user = sessionStorage.getItem(USR_SESSION_ATTRIB_NAME)
        if (user==null) return false
        return true
    }
    getLoggedUser(){
        let user = sessionStorage.getItem(USR_SESSION_ATTRIB_NAME)
        if (user==null) return false
        return user
    }   
    setupAxiosInterceptors (token){
        //let username='jirous'
        //let password='asdfg'
        //let basicAuthHeader='Basic '+ window.btoa(username + ":" + password)

        axios.interceptors.request.use(
            (config) => {
                if (this.isLogin){
                    config.headers.authorization = token
                }
                return config
            }
        )
    } 

}
export default new AuthServ()