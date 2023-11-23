import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import TaskInput from './components/TaskInput/TaskInput'
import TaskList from './components/TaskList/TaskList'
import TaskCounter from './components/TaskCounter/TaskCounter'

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
    </>
  )
}

export default App
