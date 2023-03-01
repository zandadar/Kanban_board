import { useState } from "react"

const TaskForm = ({className, addNewTask}) => {
  const [taskTitle, setTaskTitle] = useState('')
  return(
    <form 
      name="add-task" 
      className={className}
      onSubmit={ (e) => {
        e.preventDefault()
        addNewTask(taskTitle)
        setTaskTitle('')
      }}
    >
      <input
        value={taskTitle}
        onChange={ (e) => setTaskTitle(e.target.value) }
        name="add-task" 
        type="text"
        className="task-list__add-task-input"
      />
      <button
        name="add-task"
        type="submit"
        className="task-list__add-task-form-submit"
      >
        Submit
      </button>
    </form>
  )
}

export default TaskForm