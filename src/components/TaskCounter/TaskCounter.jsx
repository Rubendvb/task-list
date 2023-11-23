import PropTypes from 'prop-types'

export default function TaskCounter({ tasks }) {
  const pendingTasks = tasks.filter((task) => !task.completed).length
  return <p>Você tem {pendingTasks} tarefas pendentes!</p>
}

TaskCounter.propTypes = {
  tasks: PropTypes.array.isRequired,
}
