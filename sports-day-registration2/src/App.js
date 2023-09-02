import React from "react";
import Card from "./Card";
import events from "./mockData";

function App() {
  const firstEvent = events[0];
  const secondEvent = events[1];
  return(
  <div className="wrapper">
    <h1>Hello</h1>
    <Card cardEvent={firstEvent}/>
    <Card cardEvent={secondEvent}/>
  </div>);
}


export default App;