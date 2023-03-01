import '../../styles/App.css';
import '../../styles/Mobile.css';
import { Routes, Route } from 'react-router';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Taskpage from '../Taskpage/Taskpage';
import { useState, useEffect } from 'react';



const App = () =>{
  const [tasks, setTasks] = useState(JSON.parse(window.localStorage.getItem('tasks')) || [])
  const [taskNumber, setTaskNumber] = useState(0)
  useEffect(
    () => {
      window.localStorage.setItem('tasks', JSON.stringify(tasks))
    },
    [tasks]
  )
  return (
    <Routes>
    <Route path='/' element={ <Layout tasks={tasks}/> }>
      <Route path='' element={ <Main tasks={tasks} setTasks={setTasks} taskNumber={taskNumber} setTaskNumber={setTaskNumber}/> }/>
      <Route path='/tasks/:id' element={ <Taskpage tasks={tasks} setTasks={setTasks}/> }/>
    </Route>
  </Routes>

  
  )
}

export default App;
