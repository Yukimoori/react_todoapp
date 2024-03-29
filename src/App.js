import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        { id: 1, text: 'dataを表示する'},
        { id: 2, text: '簡単な構成を知る'},
      ],
      newTodo: { test:''}
    };
  };

  handleInput = e =>{
    const newId = Math.max.apply(null, this.state.todos.map(t => t.id)) +1;
    this.setState({
      newTodo:{id: newId, text: e.target.value }
    });
  };

  createNewtoDoItem = () => {
    this.setState(({ todos, newTodo }) =>({
      todos: [
        ...todos,
        newTodo
      ],
    newTodo: { text:''}
  }));
};

  deleteTodo = item => {
    this.setState(({ todos}) => ({
      todos: todos.filter((todo) => todo.id !== item.id)
    }));
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((item, key) =>{
            return(
              <ToDoItem
                key={key}
                text={item.text}
                deleteTodo={this.deleteTodo.bind(this,item)}
                />
            )
          })}
          </ul>
        <div>
        <input type="text" value={this.state.newTodo.text} onChange={this.handleInput}/>
        <button onClick={this.createNewtoDoItem}> + </button>
        </div>
      </div>
    );
  }
}

export default App;
