import React,{Component} from 'react'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TodoDataService from '../../api/todo/TodoDataService'
import AuthServ from './auth'

class TodoCP extends Component{
    constructor(props){
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.validate=this.validate.bind(this);

    }  
    
    componentDidMount(){
        let username= AuthServ.getLoggedUser();


        TodoDataService.showTodo(username,this.state.id)
            .then (response => this.setState({
                description: response.data.description,
                targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')
            }))
        
    }

    validate(values){
        let errors={}
        if(!values.description){
            errors.description='Entre com a descrição'
        }else if(values.description.length<5){
            errors.description='Ao menos 4 caracteres'
        }
        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid Target Date'
        }

        return errors
    }
    onSubmit(values){
        let username= AuthServ.getLoggedUser();

        let todo ={
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if(this.state.id===-1){
            
            TodoDataService.createTodo(username,todo)
            .then(
                () => this.props.history.push('/todo')
            )
        
        }else{
        TodoDataService.updateTodo(username,this.state.id,todo)
        .then(
            () => this.props.history.push('/todo')
        )
        }
        
        console.log(todo);
    }  
    render(){
        let {description,targetDate} = this.state

        return (
            <div>
                <h1>Lista</h1>
                <div className="container">
                    <Formik
                        initialValues={{description,targetDate}}
                        onSubmit={this.onSubmit}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => ( 
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-danger" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-danger" />
                                    <fieldset className="form-group">
                                        <label>Descrição</label>
                                        <Field  className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Data Limite</label>
                                        <Field  className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success">Salvar</button>
                                </Form>

                            )
                                
                        }
                    </Formik>

                </div>

            </div>
            )

    }
}

export default TodoCP