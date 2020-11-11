import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          <span className="material-icons gray">library_books</span>News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          <span className="material-icons gray">account_circle</span>Profile
        </NavLink></div>
      <div className={s.item}>
        <NavLink to="/groups" activeClassName={s.activeLink}>
          <span className="material-icons gray">groups</span>Group
        </NavLink></div>
      <div className={s.item}>
        <NavLink to="/photoGallery" activeClassName={s.activeLink}>
          <span className="material-icons gray">photo_library</span>Photos
        </NavLink></div>
      <div className={s.item}>
        <NavLink to="/videoGallery" activeClassName={s.activeLink}>
          <span className="material-icons gray">video_library</span>Videos
        </NavLink></div>
      <div className={s.item}>
        <NavLink to="/documents" activeClassName={s.activeLink}>
          <span className="material-icons gray">file_copy</span>Files
        </NavLink></div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          <span className="material-icons gray">textsms</span>Chat
        </NavLink></div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          <span className="material-icons gray">album</span>Music
        </NavLink></div>
    </nav>
  )
}
export default Navbar;