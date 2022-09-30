import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const CreateEvent = () => {
  return (
    <div className="create-event-root">
      <div> Create New Event</div>
      <div className="form">
        <div>
          <label>Event name</label>
          <input type="text" />
        </div>
        <div>
          <label>Host name</label>
          <input type="text" />
        </div>
        <div>
          <label>Starts at</label>
          <input type="date" />
        </div>
        <div>
          <label>Ends at</label>
          <input type="date" />
        </div>
      </div>
      <div>
        <button className="landing-create-button">
          <Link to="/event">Next</Link>
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
