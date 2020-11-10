import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='https://iqonic.design/themes/socialv/html/images/logo.png' />
                <span>Social</span>
            </div>
            <div className={s.search}>
                <input type="text" name="search" placeholder="Type here to search..." />
                <a href="#">
                    <span className="material-icons">search
                    </span>
                </a>
            </div>
            <div className={s.user}>
                <img src="https://iqonic.design/themes/socialv/html/images/user/1.jpg" />
                <span className={s.userName}>User User</span>
            </div>
            <nav className={s.header_nav}>
                <a href="#">
                    <span className="material-icons">person_add</span>
                </a>
                <a href="#">
                    <span className="material-icons">notifications</span>
                </a>
                <a href="#">
                    <span className="material-icons">settings</span>
                </a>
                <a href="#">
                    <span className="material-icons">login</span>
                </a>
            </nav>
        </header>
    )
}

export default Header;