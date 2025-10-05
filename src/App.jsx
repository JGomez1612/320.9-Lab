import { useState, useReducer } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'

// Reducer
import todoReducer from './reducers/todoReducer.mjs'

function App() {
  const [task, setTask] = useState("")
  const [todos, dispatch] = useReducer(todoReducer, [])


  return (
    <>
      <Header />
      <Form task={task} setTask={setTask} dispatch={dispatch} />
      <TodoList  todos={todos} dispatch={dispatch} />
    </>
  )
}

export default App