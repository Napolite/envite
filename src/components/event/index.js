/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

import cake from "../../assets/Birthday cake.png";
import locationpic from "../../assets/Location.png";
import calendar from "../../assets/Calendar.png";
import stroke from "../../assets/Stroke 1.png";

const Event = () => {
  const location = useLocation();

  const state = location.state;
  console.log(state);
  return (
    <div className="event-root">
      <div className="event-detail">
        <div className="event-title">
          <div className="event-name">{state.eventName || "Birthday Bash"}</div>
          <div>Hosted by {state.host || "Elysia"}</div>
        </div>
        <div className="event-details">
          <div>
            <img src={calendar} alt="location" />
            <div>
              <div className="date">
                {state.startDate || "18 August"} 6:00pm
              </div>
              <div>
                to <font>{state.endDate || "19 August"} 1:00pm</font> UTC+10
              </div>
            </div>
            <img src={stroke} className="stroke" />
          </div>
          <div>
            <img src={locationpic} alt="location" />
            <div>
              <div className="date">Street name</div>
              <div>Suburb, State, Province</div>
            </div>
            <img src={stroke} className="stroke" />
          </div>
        </div>
      </div>
      <img src={cake} alt="cake" className="event-image" />
    </div>
  );
};

export default Event;
