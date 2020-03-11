import React, {Component} from 'react'

class ListTodoComponet extends Component {
    constructor(props){
        super(props)
        this.state={
            todojson : [
                {id:1,description:'Aprender React',done:false,targetDate: new Date()},
                {id:2,description:'Adquirir Experiência',done:false,targetDate: new Date()},
                {id:3,description:'Ficar Rico :-P',done:false,targetDate: new Date()}
            ]
        }
    }
    
    render(){
        return (
            <div>
                <h1>Lista A Fazer</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>descrição</th>
                                <th>Finalzada</th>
                                <th>Data Limite</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todojson.map(
                                    todo=>
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default ListTodoComponet

