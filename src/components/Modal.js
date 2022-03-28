import './modal.css'

export default function Modal() {
  return (
   <div className="modal-backdrop">
       <div className="modal">
           <h2>10% off Coupon code!</h2>
           <p>Use the code NINJA10 at checkout</p>
       </div>
   </div>
  )
}
