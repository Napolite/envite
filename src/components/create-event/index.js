import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  const [state, setState] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    host: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="create-event-root">
      <div> Create New Event</div>
      <div className="form">
        <div>
          <label>Event name</label>
          <input type="text" name="eventName" onChange={handleChange} />
        </div>
        <div>
          <label>Host name</label>
          <input type="text" name="host" onChange={handleChange} />
        </div>
        <div>
          <label>Starts at</label>
          <input type="date" name="startDate" onChange={handleChange} />
        </div>
        <div>
          <label>Ends at</label>
          <input type="date" name="endDate" onChange={handleChange} />
        </div>
      </div>
      <div>
        <Link to="/event" state={state}>
          <button className="landing-create-button">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateEvent;
