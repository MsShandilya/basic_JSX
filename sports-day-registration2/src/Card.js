import React from "react";
import backgroundCardImage from './images/dolphin.jpg';
import './Card.css';

function Card(props) {
    const card_title = props.cardEvent.event_name;
    const card_description = props.cardEvent.event_category;
    const getTime = (dateTimeString) => {
      // dateTimeString = "2022-12-17 13:00:00";
      const dateTime = new Date(dateTimeString);

      const formattedTime = dateTime.toLocaleTimeString('en-US', { hour12: true });
      return formattedTime; // Output: "13:00:00"

      //`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    }
    const card_start = getTime(props.cardEvent.start_time);
    const card_endTime = getTime(props.cardEvent.end_time);
    const card_Capital = props.cardEvent.event_category[0];
  return(
  <div className="card">
    <div className="card__body">
        <div className="card_Capital">
          <h1>{card_Capital}</h1>
        </div>
        <div className="card__content">
            <img className="card__img" src={backgroundCardImage} alt="background"/>
            <h2 className="card__title">{card_title}</h2>
            <p className="card__description">{card_description}</p>
            <p className="card__timing">{card_start} - {card_endTime}</p>
        </div>
    </div>
    <button className="card__button">Select Event</button>
  </div>);
}


export default Card;