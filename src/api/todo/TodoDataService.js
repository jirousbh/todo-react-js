import axios from 'axios'
import {API_URL,JPA_API_URL} from '../../Constants'

class TodoDataService {
    listAllTodos(name){
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);

   }
   deleteTodo(name,id){
    return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }
    updateTodo(name,id, todo){
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
        }

    createTodo(name, todo){
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
        }            
    showTodo(name,id){
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    } 
}
export default new TodoDataService()