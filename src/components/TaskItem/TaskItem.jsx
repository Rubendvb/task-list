import PropTypes from 'prop-types'

export default function TaskItem({ task, handleToggle, handleDelete }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          margin: '0 1rem',
          cursor: 'pointer',
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
  task: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
