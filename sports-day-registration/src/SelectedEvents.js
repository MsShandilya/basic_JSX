// SelectedEvents.js
import React from "react";
import "./App.css"; 

const SelectedEvents = ({ selectedEvents, onEventDeselect }) => {
  return (
    <div>
      <h2>Selected Events</h2>
      {selectedEvents.map((event) => (
        <div key={event.id}>
          <div>
            <strong>{event.event_name}</strong> ({event.event_category})
          </div>
          <div>Timings: {event.start_time} - {event.end_time}</div>
          <button onClick={() => onEventDeselect(event)}>Deselect</button>
        </div>
      ))}
    </div>
  );
};

export default SelectedEvents;
