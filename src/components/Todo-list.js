import React, { Component } from 'react';
import Todo from './Todo';
import { Card } from 'react-bootstrap';


class TodoList extends Component {

  todos = [
    {
      title: "Rebuild todo",
      desc: "Rebuild todo app"
    },
    {
      title: "Build nicer UI",
      desc: "Build a nice and beautiful user interface ",
      id: 1
    },
    {
      title: "Enhance todo app",
      desc: "Make the todo app functional",
      id: 2
    },
    {
      title: "Add input",
      desc: "Make the todo app to accept input",
      id: 3
    },
    {
      title: "Add nice color",
      desc: "Enhance color theme",
      id: 4
    }
  ]

  render() {


    return (
      <Card className="todo-list">
      {this.todos.map((todo, key) => <Todo todo={todo} key={todo.id}  />)}
      </Card>
    )
  }
}

export default TodoList;