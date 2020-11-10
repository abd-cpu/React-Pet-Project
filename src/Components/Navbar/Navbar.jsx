import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <a href="#" className={s.item}>
        <span className="material-icons gray">library_books</span>News
      </a>
      <a href="#" className={s.item}>
        <span className="material-icons gray">account_circle</span>Profile
      </a>
      <a href="#" className={s.item}>
        <span className="material-icons gray">groups</span>Group
      </a>
      <a href="#" className={s.item}>
        <span className="material-icons gray">photo_library</span>Photos
      </a>
      <a href="#" className={s.item}>
        <span className="material-icons gray">video_library</span>Videos
      </a>
      <a href="#" className={s.item}>
        <span className="material-icons gray">file_copy</span>Files
      </a>
      <a href="#" className={s.item}>
        <span className="material-icons gray">textsms</span>Chat
      </a>
      <a href="#" className={s.item}>
        <span className="material-icons gray">album</span>Music
      </a>
    </nav>
  )
}
export default Navbar;