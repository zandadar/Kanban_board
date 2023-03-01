const TaskSelect = ({className, tasksToRender, transferTask}) => {

  return(
    <select
      className={className}
      name=""
      onChange={ (e) => {
        transferTask(e.target.value)
      }}
    >
      <option className="task-list__select-option" defaultValue=""></option>
      {tasksToRender.map( task =>
        <option
          key={task.id}
          value={task.id}
        > 
        {task.title}
        </option>
        )
      }
    </select>
  )
}

export default TaskSelect