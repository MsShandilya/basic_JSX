import React from "react";
import backgroundCardImage from './images/dolphin.jpg';

function Card(props) {
    const card_title = props.cardEvent.event_name;
    const card_description = props.cardEvent.event_category;
    const card_start = props.cardEvent.start_time;
    const card_endTime = props.cardEvent.end_time;
  return(
  <div className="card">
    <div className="card__body">
        <img className="card__img" src={backgroundCardImage} alt="background"/>
        <h2 className="card__title">{card_title}</h2>
        <p className="card__description">{card_description}</p>
        <p className="card__timing">{card_start} - {card_endTime}</p>
    </div>
    <button className="card__button">Select Event</button>
  </div>);
}


export default Card;