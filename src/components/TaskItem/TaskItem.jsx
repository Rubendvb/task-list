import PropTypes from 'prop-types'

export default function TaskItem({ task, handleToggle, handleDelete }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
        onClick={handleToggle}
      >
        {task.text}
      </span>

      <button onClick={handleDelete}>Deletar</button>
    </li>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
