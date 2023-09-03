// EventList.js
import React from "react";
import events from './mockData';
import Card from './Card';

function EventList(){
    const list = events.map((e) => {
        return <Card cardEvent={e}/>
    });
    return list;
}

export default EventList;