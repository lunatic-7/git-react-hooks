import React, { useContext } from 'react';
import TodoItem from "./TodoItem";
import StateContext from './StateContext';

const TodoList = (props) => {

  // const items = [
  //   { id: 1, title: "Write React Hooks Books", completed: true },
  //   { id: 2, title: "Promote Book", completed: false }
  // ]
  const items = useContext(StateContext);
  return (
    items.map(item =>
      <TodoItem {...item}  {...props} key={item.id} />
      // We define the key prop last, in order to avoid overwriting it with the
      // destructuring of the item and props objects
    )
  )
}

export default TodoList
