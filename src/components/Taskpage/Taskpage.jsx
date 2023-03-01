import { Link, useParams } from "react-router-dom";
import "../../styles/Taskpage.css";
import Cross from "../../images/cross.svg"
import { useState } from "react";

const Taskpage = ({tasks, setTasks}) => {
  const {id} = useParams()
  const task = tasks.find( item => item.id === Number(id))
  const [bodyEditorShown, setBodyEditorShown] = useState(false)
  const [bodyText, setBodyText] = useState(task.body.length == 0 ? "" : task.body)
  const editTaskBody = (text) =>{
    let tasksCopy = tasks.slice()
    let target = tasksCopy.find(item => item.id === Number(id))
    target.body = text
    setTasks(tasksCopy)
    setBodyEditorShown(!bodyEditorShown)
  }
  return(
      <main className="main">
        <div className="wrapper">
          <div className="task-page">
            <div className="task-page__header">
              <h1 className="task-page__header-title">{task.title}</h1>
              <Link className="task-page__header-button" to="/">
                <img src={Cross} alt="" />
              </Link>
            </div>
            <div 
              className="task-page__body"
              
            >
              { bodyEditorShown == false 
                ? <div
                    className="task-page__body-text"
                  >
                    {task.body.length == 0 ? "This task has no description" : task.body}
                  </div>
                : <textarea
                    placeholder="Enter the description of the task..."
                    className="task-page__body-editor" 
                    type="text"
                    onChange={ (e) => setBodyText(e.target.value) }
                    value={bodyText}
                  >
                  </textarea>
                    
                  
              }

              { bodyEditorShown == false
                ? <button
                    onClick={ () => setBodyEditorShown(!bodyEditorShown)}
                    type="button"
                    className="task-page__body-button"
                  >
                    Edit
                  </button>
                : <button
                    onClick={ () => editTaskBody(bodyText)}
                    type="button"
                    className="task-page__body-button"
                  >
                    Submit
                  </button>
              }
              
            </div>
        </div>
        </div>
      </main>
  )
}

export default Taskpage