import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import StateContext from './StateContext';

export default class TodoList extends Component {
  static contextType = StateContext;
  render() {

    // const items = [
    //   { id: 1, title: "Write React Hooks Books", completed: true },
    //   { id: 2, title: "Promote Book", completed: false }
    // ]
    const items = this.context
    return (
      items.map(item =>
        <TodoItem {...item}  {...this.props} key={item.id} />
      )
    )
  }
}
