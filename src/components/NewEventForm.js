import "./NewEventForm.css"
import { useState } from "react"

export default function NewEventForm() {
    const [title,setTitle] =useState('')
    const [date,setDate] =useState('')

    const resetForm = () =>{
   setTitle('')
    setDate('')
    }
 
    // const handleChange = (e) => {
    //     setTitle(e.target.value)
    // }
 
    return (
  <form className="new-event-form">
      <label>
          <span>Event Title:</span>
          <input type ="text" onChange={(e)=>setTitle(e.target.value)}/>
      </label>

      <label>
          <span>Event Date:</span>
          <input type="date" onChange={(e)=>setDate(e.target.value)} />
      </label>
      <button>Submit</button>
      <p>title-{title}, date-{date}</p>
      <p onClick={resetForm}>reset the form</p>
  </form>
  )
}
