// SelectedEventsList.js
import React from "react";
import Card from "./Card";
function SelectedEventsList (props) {

    if(props.events) {
        const list = props.events.map((e) => {
            return <Card cardEvent={e}/>
        });
        return <div>{list}</div>;
    }
    
    return null;
}

export default SelectedEventsList;