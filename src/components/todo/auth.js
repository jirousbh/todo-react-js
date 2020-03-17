class AuthServ{
    registerLogin(username,password){
        sessionStorage.setItem('authUser',username)
    }
    logout(){
        sessionStorage.removeItem('authUser')
    }

    isLogin(){
        let user = sessionStorage.getItem('authUser')
        if (user==null) return false
        return true
    }
    getLoggedUser(){
        let user = sessionStorage.getItem('authUser')
        if (user==null) return false
        return user
    }    

}
export default new AuthServ()