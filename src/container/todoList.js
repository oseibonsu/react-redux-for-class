import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as TodoActions from '../actions/todos';

class TodoList extends Component {
  
  render(){
    window.TodoActions = TodoActions;
    window.actions = this.props.actions;
    return <div>
      <h1>Todo List</h1>
      <ul>
        {this.props.todos.map(todo=><li key={todo.id} >{todo.text}</li>)}
      </ul>

      <button onClick={()=>this.props.actions.addTodo("Teach Redux")}> 
        add Todo
      </button>

    </div>

  }

}


function mapStateToProps(state){
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps )(TodoList)