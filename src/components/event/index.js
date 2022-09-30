import React from "react";
import "./index.css";

import cake from "../../assets/Birthday cake.png";
import location from "../../assets/Location.png";
import calendar from "../../assets/Calendar.png";
import stroke from "../../assets/Stroke 1.png";

const Event = () => {
  return (
    <div className="event-root">
      <div className="event-detail">
        <div className="event-title">
          <div className="event-name">Birthday Bash</div>
          <div>Hosted by Elysia</div>
        </div>
        <div className="event-details">
          <div>
            <img src={calendar} alt="location" />
            <div>
              <div className="date">18 August 6:00pm</div>
              <div>
                to <font>19 August 1:00pm</font> UTC+10
              </div>
            </div>
            <img src={stroke} className="stroke" />
          </div>
          <div>
            <img src={location} alt={location} />
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
