import { useState } from "react";
import { ACTIONS } from "../reducers/todoReducer.mjs";

export default function TodoItem({ id, title, completed, dispatch }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(title);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.editTodo, payload: { id, text: editText } });
        setIsEditing(false);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch({ type: ACTIONS.toggleTodo, payload: id })}
            />
            {isEditing ? (
                <form onSubmit={handleEdit} style={{ display: "inline" }}>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <>
                    <span>{title}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => dispatch({ type: ACTIONS.deleteTodo, payload: id })}
                        disabled={!completed}
                    >
                        Delete
                    </button>
                </>
            )}
        </li>
    );
}
