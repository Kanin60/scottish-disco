import style from "./Modal.module.scss"
import ReactDOM from 'react-dom';

export default function Modal({children, closeModal}) {
  return ReactDOM.createPortal((
    <div 
    className={style.modalContainer}
    onClick={() => closeModal()}
    >
        <div 
        className={style.modal}
        onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
    </div>
  ), document.body)
}
