import { useState, useReducer } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Form from './components/Form'

// Reducer
import todoReducer from './reducers/todoReducer.mjs'

function App() {
  const [task, setTask] = useState("")
  const [state, dispatch] = useReducer(todoReducer, initialState)


  return (
    <>
      <Header />
      <Form task={task} setTask={setTask} dispatch={dispatch} />
    </>
  )
}

export default App

const initialState = [
    {
        id: 1,
        title: "Take out trash",
        completed: false,
    },
    {
        id: 2,
        title: "Organize closet",
        completed: true,
    },
    {
        id: 3,
        title: "Wash Dishes",
        completed: true,
    },
    {
        id: 4,
        title: "Study for class",
        completed: false,
    },
    {
        id: 5,
        title: "Pick up groceries",
        completed: false,
    },
]