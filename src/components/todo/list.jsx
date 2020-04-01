import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthServ from './auth'
import moment from 'moment'
import { trackPromise } from 'react-promise-tracker';

class ListTodoComponet extends Component {
    constructor(props){
        super(props)
        this.state={
            todos : [],
            message: null
        }
        this.addTodoClicked = this.addTodoClicked.bind(this);
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.refreshTodos=this.refreshTodos.bind(this);
    }
    
    componentDidMount(){
        this.refreshTodos();

    }
    refreshTodos(){
        
        let username = AuthServ.getLoggedUser();
        trackPromise(
        TodoDataService.listAllTodos(username)
        .then(
            response => {
                //console.log(response);
                this.setState({todos: response.data})
            }
        )
        )

    }
    deleteTodoClicked(id){
        let username = AuthServ.getLoggedUser();
        TodoDataService.deleteTodo(username,id)
        .then(
            response => {
                this.setState({message: `Lista ${id} excluída`})
                this.refreshTodos()
            }
        )
    }
    updateTodoClicked(id){
        let username = AuthServ.getLoggedUser();
        this.props.history.push(`/todos/${id}`)
        /*.then(
            response => {
                this.setState({message: `Lista ${id} excluída`})
                this.refreshTodos()
            }
        )*/
    }  
    addTodoClicked(){
        let username = AuthServ.getLoggedUser();
        this.props.history.push('/todos/-1')
        /*.then(
            response => {
                this.setState({message: `Lista ${id} excluída`})
                this.refreshTodos()
            }
        )*/
    }     
    render(){
        return (
            <div>
                <h1>Lista A Fazer</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>descrição</th>
                                <th>Data Limite</th>
                                <th>Finalzada</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo=>
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                <td>{todo.isDone.toString()}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Alterar</button>&nbsp;
                                    <button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Apagar</button>
                                </td>
                            </tr>
                            )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={() => this.addTodoClicked()}>Novo</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ListTodoComponet

