import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'//useselector aur dispatch ko react-redux se import krna hai. 
import { addTodo, removeTodo, updateTodo } from '../feature/todoSlice'//silce ke ander se import huye hai 
import './Todo.css'

const Todo = () => {
  const [text, settext] = useState("")
  const [edit, setedit] = useState({})
  const data = useSelector((state) => state.todo.value)
  const dispatch = useDispatch()

  return (
    <div className="todo-main">

      <div className="todo-card">

        <h1 className="title">My Todo App</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter task..."
            value={text || ""}
            onChange={(e) => settext(e.target.value)}
          />
          <button className="add-btn" onClick={() => {
            dispatch(addTodo(text))
            settext("")
          }}>
            Add
          </button>
        </div>

        <div className="todo-list">
          {
            data.map((e, i) => (
              <div className="todo-item" key={i}>

                <h3 className="todo-text">{e}</h3>

                <div className="actions">
                  <button className="edit" onClick={() => dispatch(updateTodo(text))}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => dispatch(removeTodo(i))}>
                    Delete
                  </button>
                </div>

              </div>
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Todo