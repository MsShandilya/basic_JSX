import React, {useState} from "react";
import './App.css';

function App() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [error, setError] = useState('');

  return(
    <>
      <div className="pageTitle">
          <div className="title-section">
            <h1>NAMASTE</h1>
          </div>
          <div className="subTitle">
            <p>All Sports Event</p>
            <p>Selected sports</p>
          </div>
          {error && <div>{error}</div>}
      </div>
    </>
  );
}


export default App;