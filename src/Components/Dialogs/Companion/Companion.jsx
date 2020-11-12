import React from 'react';
import s from './Companion.module.css';

const Companion = (props) => {
    return (
        <div className={s.container}>
            <img src={props.avatar} />
            <div>
                <div className={s.name}>{props.userName}</div>
                <div className={s.status}>{props.status}</div>
            </div>
            
        </div>
    )
}

export default Companion;