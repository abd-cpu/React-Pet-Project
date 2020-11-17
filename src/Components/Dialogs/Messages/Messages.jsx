import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
    let messages = props.messages.map((message) => {
        if (message.author) {
            return (
                <div className={s.messageBlockAuthor}>
                    <div className={ s.textAuthor }>
                        {message.message}
                    </div>
                    <div className={ s.messageInfo }>
                        <img className={s.avatar} src={message.avatar} />
                        <span>{message.date}</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={s.messageBlock}>
                    <div className={ s.messageInfo }>
                        <img className={s.avatar} src={message.avatar} />
                        <span>{message.date}</span>
                    </div>
                    <div className={ s.text }>
                        {message.message}
                    </div>
                </div>
            )
        }
    });
    return (
        <div>
            { messages}
        </div>
    )
}

export default Messages;