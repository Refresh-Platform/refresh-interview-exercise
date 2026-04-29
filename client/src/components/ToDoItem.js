import EditTodo from "./editTodo";

function ToDoItem({
    passedRef,
    todo,
    onClick
}) {
    return (
        <tr key={todo.todo_id} ref={passedRef}>
            <td>{todo.description}</td>
            <td>
            <EditTodo todo={todo} />
            </td>
            <td>
            <button
                className="btn btn-danger"
                onClick={() => onClick(todo.todo_id)}
            >
                Delete
            </button>
            </td>
        </tr>
    )
}

export default ToDoItem