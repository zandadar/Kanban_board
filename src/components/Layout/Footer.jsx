import "../../styles/Footer.css"

const Footer = ({tasks}) => {
  const activeTasks = []
  const finishedTasks = []
  tasks.map( item => {item.status != "Finished" ? activeTasks.push(item) : finishedTasks.push(item)})
  return(
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__counter">
          <div>
            Active tasks:{activeTasks.length}
          </div>
          <div>
            Finished tasks:{finishedTasks.length}
          </div>
        </div>
        <div className="footer__author">
          Kanban board by Artur Topolyan, 2022
        </div>
      </div>
    </footer>
  )

}

export default Footer