export default function todoReducer(state, action) {
    switch (action.type) {
        case ACTIONS.addTodo:
            console.log("Adding Task")
            return [{ id: Date.now(), text: action.payload.text, completed: false },
            ...state]
        case ACTIONS.editTodo:
            console.log("Editing Task")
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, text: action.payload.text }
                    : todo
            );
        case ACTIONS.deleteTodo:
            console.log("Task Deleted")
            return state.filter(todo => todo.id !== action.payload);
        case ACTIONS.toggleTodo:
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
}


export const ACTIONS = {
    addTodo: "addTodo",
    editTodo: "editTodo",
    deleteTodo: "deleteTodo",
    toggleTodo: "toggleTodo"
}