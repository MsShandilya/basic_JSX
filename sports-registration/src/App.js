// App.js
import React, {useEffect, useState } from "react";
import EventList from "./eventList";
import './App.css';
import SelectedEventsList from "./selectedEventsList";

function App() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [error, setError] = useState('');

  useEffect(()=>{
    // handle error
    setError('');
  }, [selectedEvents]);

  const MAX_SELECTION_ALLOWED = 3;

  const handleEventSelect = (event) => {

    if(selectedEvents.length >= MAX_SELECTION_ALLOWED){
      setError("Cannot select more than 3 events.");
      setTimeout(() => setError(''), 3000);
      return;
    }
      // Check for conflicts with selected events
    const hasConflict = selectedEvents.some((selectedEvent) => {
      return (
        event.start_time < selectedEvent.end_time &&
        event.end_time > selectedEvent.start_time
      );
    });

    if(hasConflict){
      setError("Two events with same time can not be selected");
      setTimeout(() => setError(''), 3000);
      return;
    }

    if (!selectedEvents.includes(event)) {
        setSelectedEvents([...selectedEvents, event]);
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
    <>
      <div className="pageTitle">
          <div className="title-section">
            <h1>NAMASTE</h1>
          </div>
          <div className="subTitle">
            <p>All Sports Event</p>
            <p>Selected sports</p>
          </div>
          {error && <div>{error}</div>}
      </div>
      <div className="wrapper">
        <div className="column">
          <EventList
            className="allEventsList"
            selectedEvents={selectedEvents}
            onEventSelect={handleEventSelect} onEventDeselect={handleEventDeselect} />
        </div>
        <div className="column">
          <SelectedEventsList
            className="selectedEventsList"
            selectedEvents={selectedEvents}
            onEventDeselect={handleEventDeselect} />
          </div>
      </div>

    </>
  );
}


export default App;