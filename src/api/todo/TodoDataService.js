import axios from 'axios'

class TodoDataService {
    listAllTodos(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`);

   }
   deleteTodo(name,id){
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }
    updateTodo(name,id, todo){
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
        }

    createTodo(name, todo){
        return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
        }            
    showTodo(name,id){
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    } 
}
/*
class TodoDataService {
    listAllTodos(name){
        return axios.get(`https://criptonita.herokuapp.com/users/${name}/todos`);

   }
   deleteTodo(name,id){
    return axios.delete(`https://criptonita.herokuapp.com/users/${name}/todos/${id}`);
    }
    updateTodo(name,id, todo){
        return axios.put(`https://criptonita.herokuapp.com/users/${name}/todos/${id}`, todo);
        }

    createTodo(name, todo){
        return axios.post(`https://criptonita.herokuapp.com/users/${name}/todos/`, todo);
        }            
    showTodo(name,id){
        return axios.get(`https://criptonita.herokuapp.com/users/${name}/todos/${id}`);
    }   
}*/ 
export default new TodoDataService()