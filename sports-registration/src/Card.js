// Card.js
import React from "react";
import './Card.css';

function Card(props) {
    const card_title = props.cardEvent.event_name;
    const card_Capital = props.cardEvent.event_category[0];
    const card_description = props.cardEvent.event_category;
    const card_start = getTime(props.cardEvent.start_time);
    const card_endTime = getTime(props.cardEvent.end_time);

  return(
  <div className="card">
    <div className="card__body">
        <div className="card_Capital">
          <h1>{card_Capital}</h1>
        </div>
        <div className="card__content">
            <h3 className="card__title">{card_title}</h3>
            <p className="card__description">{card_description}</p>
            <p className="card__timing">{card_start} - {card_endTime}</p>
            <button 
                className="card__button" 
                onClick={() =>props.onClick(props.cardEvent)}>{props.buttonText}
            </button>
        </div>
    </div>
  </div>
  );
}

/** 
 * 
 * @param {dateTimeString} : "2022-12-17 13:00:00"
 * @returns  "1:00PM"
 */
const getTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  const formattedTime = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  return formattedTime; 
  //`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


export default Card;