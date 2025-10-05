import { ACTIONS } from "../reducers/todoReducer.mjs";

export default function Form({task, setTask, dispatch}){

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTIONS.addTodo,
            payload: { text: task }
        });

        setTask("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="task"
                placeholder="Setup a task!"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                ></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}