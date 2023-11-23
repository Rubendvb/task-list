import PropTypes from 'prop-types'

import TaskItem from '../TaskItem/TaskItem'

export default function TaskList({ tasks, handleToggle, handleDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleToggle={() => handleToggle(task.id)}
          handleDelete={() => handleDelete(task.id)}
        />
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
