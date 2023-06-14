import { useState } from "react";
import "./styles.scss";
import ContactBox from "../ContactBox/ContactBox";

//////////////////////////// NO NEED TO OVERCOMPLICATE IT, NAVBAR GETS A NEW CLASS THAT 'HIDES IT' FROM THE VIEW ONCE THE RECTANGLE ANIMATION STARTS
//////////////////////////// AND RETURNS TO NORMAL, ONCE THE FIRST ZOOM ANIMATION BEGINS ON STAGE 2

const RectangleGateNav = () => {
  const [contactBox, toggleContactBox] = useState(false);
  return (
    <>
      <nav className="startScreen__navbar ">
        <div className="container">
          <div className="logo"></div>
          <div className="main_list">
            <ul className="navlinks">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/krzysztof-szafran-35806127b/"
                  className="hover-underline-animation"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Havir-S"
                  className="hover-underline-animation"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/krzysztofszafrann/"
                  className="hover-underline-animation"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover-underline-animation"
                  onClick={() => {
                    toggleContactBox(true);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <span className="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
      {contactBox && <ContactBox toggleContactBox={toggleContactBox} />}
    </>
  );
};

export default RectangleGateNav;
