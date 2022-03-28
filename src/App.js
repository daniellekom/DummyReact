import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] =useState(false)
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

const addEvent = (event) => {
  setEvents((prevEvents)=> {
    return[...prevEvents,event]
  })
  setShowModal(false)
}

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  // const handleClose = () => {
  //   setShowModal(false)
  // }

  const subtitle = "All the latest events in Danielle's world";

  return (
    <div className="App">
      <Title title="Create Your Event" subtitle={subtitle} />
      {/* <Title title="another title" subtitle = "another subtitle"/> */}

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}> hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick}/> }
      {/* <Modal>
        <h2>10% off Coupon code!</h2>
        <p>Use the code NINJA10 at checkout</p>
      </Modal> */}


      {showModal && <Modal isSalesModal={true} >
      <NewEventForm addEvent={addEvent}/>
        </Modal>}

        <div>
          <button onClick={()=> setShowModal(true)}>Add New Event</button>
        </div>
    </div>
  );
}

export default App;
