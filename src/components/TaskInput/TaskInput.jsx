import PropTypes from 'prop-types'
import { useState } from 'react'

import './TaskInput.css'

export default function TaskInput({ addTask }) {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (task.trim()) {
      addTask(task)

      setTask('')
    }
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="todoInput">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Digite sua tarefa"
      />

      <button type="submit">Adicionar</button>
    </form>
  )
}

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
}
