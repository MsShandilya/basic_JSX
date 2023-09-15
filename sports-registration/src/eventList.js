// EventList.js
import React, {useState, useEffect} from "react";
import events from './mockData';
import Card from './Card';
import './eventList.css';

function EventList(props){
    const { selectedEvents, onEventSelect , onEventDeselect} = props;
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Fetch event data from the API
        fetch('https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a')
          .then((response) => response.json())
          .then((data) => {
            setEvents(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching event data:', error);
            setLoading(false);
          });
      }, []);
    
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
        <>
            {loading ? (<p>loading the events</p>): (<div className="event-list">  {list}   </div>) }
        </>
      );
}

export default EventList;