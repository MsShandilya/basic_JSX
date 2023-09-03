import React from "react";
import EventList from "./eventList";
import './App.css';
import SelectedEventsList from "./selectedEventsList";

function App() {
  return(
  <div className="wrapper">
    <h1>Hello</h1>
    <EventList />
    <SelectedEventsList /> 
  </div>);
}
 

export default App;