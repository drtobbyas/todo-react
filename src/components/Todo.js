import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import './todo.css';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <Card className="todo">
      <Card className="title" >{this.props.todo.title}</Card>
      <Card >{this.props.todo.desc}</Card>
      </Card>
    )
  }

}

export default Todo;