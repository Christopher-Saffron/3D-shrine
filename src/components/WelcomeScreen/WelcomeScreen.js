import React from "react";
import "./styles.scss";

const WelcomeScreen = ({ toggleWelcome }) => {
  return (
    <div
      className="welcome__div"
      onClick={(e) => {
        e.stopPropagation();
        toggleWelcome(false);
      }}
    >
      <div className="welcome__tab">
        <div
          className="welcome__exit"
          onClick={() => {
            toggleWelcome(false);
          }}
        >
          <span>+</span>
        </div>
        <div className="welcome__mainInfo">CHANGELOG</div>
        <div className="welcome__updates">
          <div className="welcome__update">
            <img src={process.env.PUBLIC_URL + "/foxS6.svg"} alt="" />
            <div className="welcome__update_text">
              <span>- Populated all projects.</span>
            </div>
          </div>
          <div className="welcome__update">
            <img src={process.env.PUBLIC_URL + "/foxS6.svg"} alt="" />
            <div className="welcome__update_text">
              <p>- Revamp of the main .gltb file.</p>
              <p>
                - Removing elements no longer visible after first animation
                ends.{" "}
              </p>
            </div>
          </div>
          <div className="welcome__update">
            <img src={process.env.PUBLIC_URL + "/foxS6.svg"} alt="" />
            <div className="welcome__update_text">
              <p>- Found copyright free + editable music</p>
              <p>- Edited and optimized for the website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
