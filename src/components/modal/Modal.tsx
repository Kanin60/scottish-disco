import React from 'react-dom';
import style from "./Modal.module.scss"


export default function Modal({children}) {
  return (
    <div className={style.modalContainer}>
        <div className={style.modal}>
          {children}
        </div>
    </div>
  )
}
