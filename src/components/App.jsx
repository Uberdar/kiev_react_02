import React from 'react';
import { nanoid } from 'nanoid';
import TodoEditor from './TodoEditor/TodoEditor';
import TodoList from './TodoList/TodoList';

export class App extends React.Component {
  state = {
    todos: [
      { id: 'id-1', text: 'descr1', completed: false },
      { id: 'id-2', text: 'descr2', completed: false },
      { id: 'id-3', text: 'descr3', completed: false },
    ],
  };

  addTodosHandler = txt => {
    console.log('txt: ', txt);
    const testid = nanoid(5);
    console.log('testid: ', testid);
    const newTodo = {
      id: nanoid(5),
      text: txt,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos],
    }));
  };

  deleteTodosHandler = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(el => el.id !== todoId),
    }));
  };

  chekedTodosListenHandler = todoId => {
    console.log('todoId: ', todoId);
    this.setState(prevState => ({
      todos: prevState.todos.map(el => {
        if (el.id === todoId) {
          return { ...el, completed: !el.completed };
        }
        return el;
      }),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <h1>Component status</h1>
        <TodoEditor addOneTodo={this.addTodosHandler} />
        <TodoList
          todos={todos}
          onDeleteTodos={this.deleteTodosHandler}
          onToggleCompleted={this.chekedTodosListenHandler}
        />
      </>
    );
  }
}
