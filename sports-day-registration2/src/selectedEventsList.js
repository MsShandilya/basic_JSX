// SelectedEventsList.js
import React from "react";
import Card from "./Card";
function SelectedEventsList (props) {
    const { selectedEvents, onEventDeselect } = props;

    if(selectedEvents && selectedEvents.length>0) {
        const list = selectedEvents.map((e, indx) => {
            return <Card 
                        key={indx} 
                        cardEvent={e} x
                        buttonText="Deselect Event"
                        onClick={() => onEventDeselect(e)}
                    />
        });
        return (
            <div className="card-container">
              {list}
            </div>
          );
    }
    
    return <p>No selected events</p>;
}

export default SelectedEventsList;