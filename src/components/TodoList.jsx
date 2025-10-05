import TodoItem from "./TodoItem";

export default function TodoList({ todos, dispatch }) {
    return (
        <ul>
            {todos.length === 0 ? (
                <p> No Tasks yet!</p>
            ) : (
                todos.map((todo) => (
                    <TodoItem 
                        key={todo.id}
                        id={todo.id}
                        title={todo.text}
                        completed={todo.completed}
                        dispatch={dispatch}
                    />
                ))
            )}
        </ul>
    )
}