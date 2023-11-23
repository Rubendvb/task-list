import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import TaskInput from './components/TaskInput/TaskInput'
import TaskList from './components/TaskList/TaskList'
import TaskCounter from './components/TaskCounter/TaskCounter'
import TodoList from './components/TodoList/TodoList'

function App() {
  // const [tasks, setTasks] = useState([])
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('allTasks')) || []
  )

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }])
  }

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('allTasks', JSON.stringify(tasks))
  }, [tasks, setTasks])

  const [filter, setFilter] = useState('all')

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true
    }

    if (filter === 'completed') {
      return task.completed
    }

    if (filter === 'active') {
      return !task.completed
    }

    return false
  })

  return (
    <>
      <Header />

      <TaskInput addTask={addTask} />

      <TaskList
        tasks={tasks}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />

      <TaskCounter tasks={tasks} />

      <div>
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('completed')}>Completas</button>
        <button onClick={() => setFilter('active')}>Ativas</button>
      </div>

      <TodoList
        tasks={filteredTasks}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </>
  )
}

export default App
