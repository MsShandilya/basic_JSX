import React, { useState } from "react";
import EventList from "./eventList";
import './App.css';
import SelectedEventsList from "./selectedEventsList";

function App() {
  const [selectedEvents, setSelectedEvents] = useState('');
  // Define a function to handle event selection
  const handleEventSelect = (event) => {
    setSelectedEvents([...selectedEvents, event]);
  };

  return(
  <div className="wrapper">
    <h1>Hello</h1>
    <EventList onEventSelect={handleEventSelect}/>
    <SelectedEventsList events={selectedEvents} />
  </div>);
}
 

export default App;