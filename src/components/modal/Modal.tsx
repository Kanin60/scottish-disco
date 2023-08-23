import style from "./Modal.module.scss"
import ReactDOM from 'react-dom';

export default function Modal({children}) {
  return ReactDOM.createPortal((
    <div className={style.modalContainer}>
        <div className={style.modal}>
          {children}
        </div>
    </div>
  ), document.body)
}
