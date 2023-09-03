// SelectedEventsList.js
import React from "react";
import Card from "./Card";
function SelectedEventsList (props) {

    if(props.events) {
        const list = props.events.map((e, indx) => {
            return <Card key={indx} cardEvent={e}/>
        });
        return <div>{list}</div>;
    }
    
    return null;
}

export default SelectedEventsList;