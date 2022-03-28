import './modal.css'
import ReactDOM from "react-dom"

//i could use props.children or destructure and just do children

export default function Modal({children, handleClose}) {
  return ReactDOM.createPortal((
   <div className="modal-backdrop">
       <div className="modal">
         {children}
         <button onClick={handleClose}>close</button>
       </div>
   </div>
  ),document.body )
}
