// EventList.js
import React from "react";
import "./App.css"; 

const EventList = ({ events, onEventSelect, selectedEvents }) => {
  const handleEventSelect = (event) => {
    if (selectedEvents.length < 3) {
      if (!hasTimeConflict(event, selectedEvents)) {
        onEventSelect(event);
      } else {
        alert("Time conflict! You can't participate in two events at the same time.");
      }
    } else {
      alert("You can select a maximum of 3 events.");
    }
  };

  const hasTimeConflict = (event, selectedEvents) => {
    const eventStartTime = new Date(event.start_time);
    const eventEndTime = new Date(event.end_time);

    for (const selectedEvent of selectedEvents) {
      const selectedEventStartTime = new Date(selectedEvent.start_time);
      const selectedEventEndTime = new Date(selectedEvent.end_time);

      if (
        (eventStartTime >= selectedEventStartTime && eventStartTime < selectedEventEndTime) ||
        (eventEndTime > selectedEventStartTime && eventEndTime <= selectedEventEndTime)
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      <h2>Events</h2>
      {events.map((event) => (
        <div key={event.id}>
          <div>
            <strong>{event.event_name}</strong> ({event.event_category})
          </div>
          <div>Timings: {event.start_time} - {event.end_time}</div>
          <button onClick={() => handleEventSelect(event)}>Select</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
