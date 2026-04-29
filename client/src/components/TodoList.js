import React, { Fragment, useEffect, useState } from "react";
import { useSortable } from '@dnd-kit/react/sortable';
import { DragDropProvider } from '@dnd-kit/react'
import ToDoItem from './ToDoItem';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:8080/RefreshTodo/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/RefreshTodo");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onDragEnd = ({ operation }) => {
    console.log(operation.source.initialIndex, operation.source.index);
    // set todos to new order
    const newTodos = [...todos];
    const [removed] = newTodos.splice(operation.source.initialIndex, 1);
    newTodos.splice(operation.source.index, 0, removed);
    setTodos(newTodos);
    // console.log(newTodos.map(todo => todo.todo_id));
    // POST to /RefreshTodo/order endpoint with new order of todo ids - body has orderedIds field
    fetch(`http://localhost:8080/RefreshTodo/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderedIds: newTodos.map(todo => todo.todo_id) })
    });
  }

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          <DragDropProvider onDragEnd={onDragEnd}>
            {todos.map(todo => (
              <SortableItem
                todo={todo}
                index={todos.indexOf(todo)}
                onClick={deleteTodo}
                key={todo.todo_id}
              />
            ))}
          </DragDropProvider>
        </tbody>
      </table>
    </Fragment>
  );
};

const SortableItem = ({
  todo,
  index,
  onClick,
}) => {
  const {ref} = useSortable({
    id: todo.todo_id,
    index
  });

  return (
    <ToDoItem 
      passedRef={ref}
      todo={todo} 
      onClick={onClick}
    />
  );
}

export default ListTodos;
