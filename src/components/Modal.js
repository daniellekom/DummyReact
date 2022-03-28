import './modal.css'
import ReactDOM from "react-dom"

//i could use props.children or destructure and just do children

export default function Modal({children, isSalesModal}) {
  return ReactDOM.createPortal((
   <div className="modal-backdrop">
       <div className="modal" style={{
         border:"4px solid",
         borderColor: isSalesModal ? "#ff4500" :"#555",
         textAlign:"center"
         }}>
         {children}
       </div>
   </div>
  ),document.body )
}
