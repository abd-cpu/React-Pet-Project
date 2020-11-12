import React from 'react';
import s from './Companion.module.css';
import {NavLink} from 'react-router-dom';

const Companion = (props) => {
    let path = "/dialogs/" + props.pathName;
    return (
        <NavLink to={path} className={s.container}>
            <img src={props.avatar} />
            <div>
                <div className={s.name}>{props.userName}</div>
                <div className={s.status}>{props.status}</div>
            </div>
            
        </NavLink>
    )
}

export default Companion;