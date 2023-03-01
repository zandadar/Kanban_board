import { useState } from "react";
import { Link } from "react-router-dom";
import Plus from "../../images/plus.svg";
import TaskSelect from "../UI/TaskSelect";
import TaskForm from "../UI/TaskForm"

const TaskList = ({type, tasks, setTasks, lastType}) => {
  const [showForm, setShowForm] = useState(false)
  const tasksToRender = []
  if (type != "Backlog"){
    tasks.map(task => {
      if (task.status == lastType) tasksToRender.push(task)
    })
  }
  const addNewTask = (task) => {
    if (task.length != 0 ){
      let newTask = {
        id: tasks.length + 1,
        title: task,
        body: "",
        status: type
      }
      setTasks([...tasks, newTask])
    }
    setShowForm(!showForm)
  }
  const transferTask = (task) => {
    let tasksCopy = tasks.slice()
    let target = tasksCopy.find(item => item.id == task)
    target.status = type
    setTasks(tasksCopy)
    setShowForm(!showForm)
  }

  return(
    <div className="task-list">
      <h4 className="task-list__title">{type}</h4>
      <div className="task-list__body">
        {tasks.length !== 0
          ? tasks.map( task => 
            (task.status == type) && 
              (
                <Link
                  key={task.id}
                  to={`tasks/${task.id}`}
                  className="task-list__task"
                >
                  {task.title}
                </Link> 
              )
            )  
          : <></>}
        {type === "Backlog"
          ? <button
              className={showForm === false ? "task-list__add-card" : "task-list__add-card _hidden"}
              type="button"
              onClick={() => setShowForm(!showForm)}
            >
              <img src={Plus} alt="Plus" />
              Add card
            </button>
          : <button
              disabled={tasksToRender.length == 0 ? true : false}
              className={showForm === false ? "task-list__add-card" : "task-list__add-card _hidden"}
              type="button"
              onClick={() => setShowForm(!showForm)}
            >
              <img src={Plus} alt="Plus" />
              Add card
            </button>
        }
        {type === "Backlog"

          ? <TaskForm
              addNewTask={addNewTask}
              className={showForm === false ? "task-list__add-task-form _hidden" : "task-list__add-task-form"}
            /> 
          : <TaskSelect
              tasksToRender={tasksToRender}
              transferTask={transferTask}
              className={showForm === false ? "task-list__select _hidden" : "task-list__select"}
            />


        }
      </div>
    </div>
  )

}

export default TaskList