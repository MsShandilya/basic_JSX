// EventList.js
import React from "react";
import events from './mockData';
import Card from './Card';
import './eventList.css';

function EventList(props){
    const { selectedEvents, onEventSelect , onEventDeselect} = props;
    
    const list = events.map((e, index) => {
        // Check if the event is selected based on selectedEvents state
        const isSelected = selectedEvents.includes(e);
        const handleOnClick = (e) => {
            isSelected ? onEventDeselect(e) : onEventSelect(e);
        }
        return  (
            <Card   
                key={index}
                cardEvent={e} 
                onClick={handleOnClick}
                buttonText={isSelected ? "Deselect Event" : "Select Event"}
             />
        )
    });
    return (
        <div className="event-list">
          {list}
        </div>
      );
}

export default EventList;