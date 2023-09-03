// EventList.js
import React from "react";
import events from './mockData';
import Card from './Card';

function EventList(){
    const list = events.map((e, index) => {
        return <Card key={index} cardEvent={e}/>
    });
    return list;
}

export default EventList;