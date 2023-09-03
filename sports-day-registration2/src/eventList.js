// EventList.js
import React from "react";
import events from './mockData';
import Card from './Card';

function EventList(props){
    const list = events.map((e, index) => {
        return  <Card   key={index} 
                        cardEvent={e} 
                        onEventSelect={props.onEventSelect} 
                        buttonText="Select Event"/>
    });
    return list;
}

export default EventList;