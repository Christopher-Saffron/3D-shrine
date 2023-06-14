import React from "react";
import "./styles.scss";
const ContactBox = ({ toggleContactBox }) => {
  return (
    <div
      className="welcome__div"
      onClick={(e) => {
        toggleContactBox(false);
      }}
    >
      <div
        className="welcome__tab welcome__tab_flex"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/place/Krak%C3%B3w/"
          className="welcome__tab_flexItem"
        >
          <img src="./address2.svg" alt="" className="welcome__tab_flexImg" />
          <p>Cracow, Poland</p>
        </a>
        <div className="welcome__tab_flexItem">
          <img src="./phone2.svg" alt="" className="welcome__tab_flexImg" />
          <p>&#40;+48&#41; 789 133 788</p>
        </div>
        <div className="welcome__tab_flexItem">
          <img src="./mail2.svg" alt="" className="welcome__tab_flexImg" />
          <p>saff.christopher@gmail.com</p>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.christophersaffron.com/"
          className="welcome__tab_flexItem"
        >
          <img src="./home.svg" alt="" className="welcome__tab_flexImg" />
          <p>christophersaffron.com</p>
        </a>
        <div
          className="welcome__exit"
          onClick={() => {
            toggleContactBox(false);
          }}
        >
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
