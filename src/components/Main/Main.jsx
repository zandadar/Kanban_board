import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import "../../styles/Main.css";
import TaskList from "./TaskList";



const Main = ({tasks, setTasks, taskNumber, setTaskNumber}) => {
  const types = ["Backlog", "Ready", "In progress", "Finished"]

  
  return(
    <main className="main">
      <div className="wrapper">
       {types.map((type,index) => 
        <TaskList 
          key={type} 
          type={type} 
          tasks={tasks} 
          setTasks={setTasks} 
          taskNumber={taskNumber} 
          setTaskNumber={setTaskNumber}
          lastType={types[index-1]}
        />
       )}
      </div>
    </main>
  )

}

export default Main