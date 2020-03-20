import axios from 'axios'
import {API_URL} from '../../Constants'

class HelloWorldService {
     executeHelloWorldService(){
          return axios.get(`${API_URL}/hello-world`);
 
     }
     executeHelloBeanWorldService(){
          return axios.get(`${API_URL}/hello-world-bean`);
 
     }
     executeHelloWorldPathVariableService(name){
         return axios.get(`${API_URL}/hello-world/path-variable/${name}`);
 
    }
 
   
 
 }
export default new HelloWorldService()