//import './App.css';
import React,{Component} from 'react';
export default class FormTodo extends Component{
  state={
    inputValue:"",
    todos:[]
  };
  inputChange=(e)=>{
    this.setState({inputValue:e.target.value});
  };
  buttonSubmit=(e)=>{
    e.preventDefault();
    if(this.state.inputValue!==""){
      this.setState({
        todos:[this.state.inputValue,...this.state.todos],
        inputValue:""

      });
    }
  };
  render(){
    return(
      <form className='form' onSubmit={this.buttonSubmit}>
        <p className='text' style={{textAlign:"left"}}>Enter the known Languages</p>
        <input className='input' type='text' value={this.state.inputValue} placeholder="Enter task..." onChange={this.inputChange}></input><br></br>
        <button onClick={this.buttonSubmit} className='button' >SUBMIT</button>
        <ol className='list'>{this.state.todos.map((todo,index)=>(
          <li key={index} onClick={this.listRemove}>
            {todo}
          </li>
          

        ))}
          </ol>
        </form>
    )
  }
}

