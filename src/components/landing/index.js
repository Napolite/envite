import React from "react";
import landingImage from "../../assets/Landing page image.svg";
import { Link } from "react-router-dom";
import "./index.css";
function Landing() {
  return (
    <>
      <div className="landing-root">
        <div className="landing-image-header-div">
          <div className="header">
            <div className="header-note">
              Imagine if <font>Snapchat</font> had events.
            </div>
            <div className="note">
              Easily host and share events with your friends across any social
              media.
            </div>
          </div>
          <div className="landing-image-div"></div>
          <img src={landingImage} alt="landing" className="landing-image" />
        </div>
        <Link to="/createevent">
          <button className="landing-create-button">🎉 Create my event</button>
        </Link>
      </div>
    </>
  );
}

export default Landing;
