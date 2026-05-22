import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo
} from '../feature/todoSlice'

const Home = () => {

  const dispatch = useDispatch()

  const todos = useSelector(
    (state) => state.tasks.todos
  )

  const [todo, settodo] = useState({
    title: "",
    description: ""
  })

  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])

  const handleEdit = (item) => {
    settodo(item)
  }

  const handleSubmit = async () => {

    if (
      todo.title  === "" ||
      todo.description  === ""
    ) {
      alert("Please fill both fields")
      return
    }

    if (todo.id) {

      await dispatch(updateTodo(todo))

    } else {

      await dispatch(addTodo(todo))

    }

    settodo({
      title: "",
      description: ""
    })

    dispatch(getTodo())
  }

  return (
    <div className="container">

      <div>

        <input
          className="m-3"
          type="text"
          placeholder="title"
          value={todo.title}
          onChange={(e) =>
            settodo({
              ...todo,
              title: e.target.value
            })
          }
        />

        <input
          className="m-3"
          type="text"
          placeholder="description"
          value={todo.description}
          onChange={(e) =>
            settodo({
              ...todo,
              description: e.target.value
            })
          }
        />

        <button
          className="btn btn-secondary"
          onClick={handleSubmit}
        >
          {todo.id ? "Update" : "Add"}
        </button>

      </div>

      <div className="container">

        <div className="todo-box d-flex flex-wrap w-100">

          {
            todos.map((item) => (

              <div
                key={item.id}
                className="todo border w-25 m-3 border-2 p-3"
              >

                <p>{item.title}</p>

                <p>{item.description}</p>

                <div className="d-flex justify-content-between">

                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      handleEdit(item)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-outline-danger"
                    onClick={async () => {
                      await dispatch(
                        deleteTodo(item.id)
                      )

                      dispatch(getTodo())
                    }}
                  >
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

export default Home