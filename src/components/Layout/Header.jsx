import { useState } from "react";
import "../../styles/Header.css";
import UserAvatar from "../../images/user-avatar.svg";
import ArrowDown from "../../images/arrow-down.svg";
import ArrowUp from "../../images/arrow-up.svg";


const Header = () => {
  const [userActions, setUserActions] = useState(false)
  const [dropdownDirection, setDropdownDirection] = useState(false)
  const userMenu = () =>{
    setUserActions(!userActions)
    setDropdownDirection(!dropdownDirection)
  }
  return(
    <header className="header">

      <div className="wrapper">

        <h1 className="header__title">Awesome Kanban Board</h1>

        <div className="header__user">
          <button
            onClick={ () => userMenu()}
            type="button"
            className="header__user-button">
            <img
              src={UserAvatar}
              alt="user-avatar"
              className="user-avatar"
            />
            <img
              src={dropdownDirection == false? ArrowDown : ArrowUp}
              alt="dropdown"
              className="dropdown"
            />
          </button>
          <div
            className={userActions == true ? "header__user-actions _active" : "header__user-actions"}
          >
            <a>Profile</a>
            <a>Log out</a>
          </div>
        </div>

      </div>

    </header>
  )

}

export default Header