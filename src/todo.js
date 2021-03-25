import React from 'react' ;
import './todo.css' ;

class Todo extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            tasks: [] ,
            input:""
        }
    }

    render(){
        return (
            <div>
            <h1> Tasks</h1>
                <ul>
                    {
                        this.state.tasks.map((task,i) =>
                        <li key={i}>
                            {/* <button onClick={() => this.deleteTask1(i)}>Delete</button> */}
                            <button data-index ={i} onClick={this.deleteTask}>Delete</button>
                            {task}
                        </li>
                    )}
                </ul>
                <input  onChange = {this.handleChange} value={this.state.input} />
                <button onClick={this.addTask}>Add new Task</button>
                <h1> You have {this.state.tasks.length} Tasks</h1>
            </div>
        ) ;

    }

    handleChange = (event) =>{
        this.setState(state =>({
            input: event.target.value
        })) ;
    }

    addTask = () =>{
        this.setState(state =>({
            tasks: [...state.tasks,state.input] ,
            input:""
        })) ; 
    }

    deleteTask  = (event) =>{
        const index = event.target.dataset.index ;

        this.setState(state =>{

           const tasks =  [...this.state.tasks]
            tasks.splice(index,1) ;
            return {
                tasks //key and value has the same name, short hand for tasks:tasks
            } ;
        }) ;
    }

    deleteTask1  = (index) =>{
        this.setState(state =>{

           const tasks =  [...this.state.tasks]
            tasks.splice(index,1) ;
            return {
                tasks:tasks
            } ;
        }) ;
    }
}

export default Todo ;