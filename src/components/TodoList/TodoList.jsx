import PropTypes from 'prop-types'

import TaskList from '../TaskList/TaskList'

export default function TodoList({ tasks, handleToggle, handleDelete }) {
  return (
    <div>
      <TaskList
        tasks={tasks}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  )
}

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
