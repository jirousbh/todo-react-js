import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter : 0,
           
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }    
    render(){
        return(
            <div className="counter">
            <CounterButton  incremetMethod={this.increment} decremetMethod={this.decrement}/>
            <CounterButton by={5} incremetMethod={this.increment} decremetMethod={this.decrement}/>
            <CounterButton by={10} incremetMethod={this.increment} decremetMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div><button className="reset" onClick={this.reset}>Zerar</button></div>
            </div>
        );
    }
    reset(){
        this.setState(
            {counter: 0}
         );
        
    }
    increment(by) {
        //console.log(`increment from child - ${by}`);
       this.setState(
           (prevState) =>{
            return {counter: prevState.counter + by}
        });
    }  
    decrement(by) {
        //console.log(`increment from child - ${by}`);
       this.setState(
           (prevState) =>{
            return {counter: prevState.counter - by}
        });
    }       
}
  class CounterButton extends Component {
    //Define the initial state in a constructor
    //state=>counter 0
    //constructor(){
        //super();
     /*   this.state={
            counter : 0,
           
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        */
    //}     
 
    render() {
    //render = () => {
        //const style = {fontSize : "50px", padding :"15px 30px"}
        return(
            <div className="counter">
                <button onClick={() => this.props.incremetMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decremetMethod(this.props.by)}>-{this.props.by}</button>
                
            </div>
        )
    }
 /*   increment() {
        //console.log('increment');
        //this.state.counter++;
        this.setState(
            (prevState) =>{
             return {counter: this.state.counter + this.props.by}
         });

        this.props.incremetMethod(this.props.by);
    }    
    decrement() {
        //console.log('increment');
        //this.state.counter++;
        this.setState(
            (prevState) =>{
             return {counter: this.state.counter - this.props.by}
         });

        this.props.decremetMethod(this.props.by);
    } */     

}

CounterButton.defaultProps = {
    by : 1
}
CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter
