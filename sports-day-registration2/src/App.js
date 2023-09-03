import React, { useState } from "react";
import EventList from "./eventList";
import './App.css';
import SelectedEventsList from "./selectedEventsList";

function App() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const maxSelectedEvents = 3;

  const handleEventSelect = (event) => {
    if (!selectedEvents.includes(event)) {
      if (selectedEvents.length < maxSelectedEvents) {
        setSelectedEvents([...selectedEvents, event]);
      } else {
        console.log("Cannot select more than 3 events.");
      }
    } else {
      // Deselect the event if it's already selected
      handleEventDeselect(event);
    }
  };

  const handleEventDeselect = (event) => {
    const updatedSelectedEvents = selectedEvents.filter(
      (selectedEvent) => selectedEvent !== event
    );
    setSelectedEvents(updatedSelectedEvents);
  };

  return(
    <div className="wrapper">
      <h1>Hello</h1>
      <EventList selectedEvents={selectedEvents} onEventSelect={handleEventSelect} onEventDeselect={handleEventDeselect} />
      <SelectedEventsList selectedEvents={selectedEvents} onEventDeselect={handleEventDeselect} />
    </div>);
}
 

export default App;