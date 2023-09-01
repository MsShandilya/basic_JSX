// App.js
import React, { useState } from "react";
import eventsData from "./mockData";
import EventList from "./EventList";
import SelectedEvents from "./SelectedEvents";
import "./App.css";

function App() {
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleEventSelect = (event) => {
    if (selectedEvents.length < 3) {
      setSelectedEvents([...selectedEvents, event]);
    } else {
      alert("You can select a maximum of 3 events.");
    }
  };

  const handleEventDeselect = (eventToRemove) => {
    setSelectedEvents(selectedEvents.filter((event) => event.id !== eventToRemove.id));
  };

  return (
    <div>
      <h1>Sports Day Registration</h1>
      <div style={{ display: "flex" }}>
        <EventList events={eventsData} onEventSelect={handleEventSelect} selectedEvents={selectedEvents} />
        <SelectedEvents selectedEvents={selectedEvents} onEventDeselect={handleEventDeselect} />
      </div>
    </div>
  );
}

export default App;
