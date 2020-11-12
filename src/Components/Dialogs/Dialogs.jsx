import React from 'react';
import Companion from './Companion/Companion';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogList}>
        <Companion status="online" userName="Bob Marlie" avatar="https://iqonic.design/themes/socialv/vue/dist/img/user-01.22e5a823.jpg?__WB_REVISION__=22e5a82300637450aa1b4f2de5871337" />
        <Companion status="online" userName="Jim Trevor" avatar="https://iqonic.design/themes/socialv/vue/dist/img/user-03.a25e92f0.jpg?__WB_REVISION__=a25e92f09c9354a61dbcc1150101a9f5" />
        <Companion status="online" userName="Lin Hue" avatar="https://iqonic.design/themes/socialv/vue/dist/img/user-05.1c0efd4b.jpg?__WB_REVISION__=1c0efd4bac21364863911f337fcd51cf" />
        <Companion status="offline" userName="Xiao Han" avatar="https://iqonic.design/themes/socialv/vue/dist/img/user-04.ac29a257.jpg?__WB_REVISION__=ac29a2570bc401ae27a4ce915817eaf5" />
        <Companion status="offline" userName="Chelsea Lee" avatar="https://iqonic.design/themes/socialv/vue/dist/img/user10.db6dc465.jpg?__WB_REVISION__=db6dc4655055421dfdbae689fa57e821" />
      </div>
      <div className={s.discussion}>
        <Companion status="online" userName="Bob Marlie" avatar="https://iqonic.design/themes/socialv/vue/dist/img/user-01.22e5a823.jpg?__WB_REVISION__=22e5a82300637450aa1b4f2de5871337" />
        <div className={s.display}>
        </div>
        <div className={s.inputs}>
          <input placeholder="Type your message" />
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;