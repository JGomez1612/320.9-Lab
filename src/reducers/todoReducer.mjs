export default function todoReducer(state, action) {
    switch (action.type) {
        case ACTIONS.addTodo:
            console.log("Adding Task")
            return [action.payload, ...state]
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
        default:
            return state;
    }
}


export const ACTIONS = {
    addTodo: "addTodo",
    editTodo: "editTodo",
    deleteTodo: "deleteTodo"
}