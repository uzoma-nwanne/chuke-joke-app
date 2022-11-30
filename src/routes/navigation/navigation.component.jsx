import { useState, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import arrowImg from "../../assets/01/path_2.png";
import personImg from "../../assets/01/shape.png";
import "./navigation.styles.scss";

const defaultFormFields = {
  searchString: "",
};
const Navigation = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { searchString } = formFields;
  return (
    <Fragment>
      <div className="App">
        {/* Header Area  */}
        <header>
          <div>
            <nav>
              <img
                className="mobile-menu-icon toggle"
                src="img/Hamburger Menu.svg"
                alt="Mobile Menu"
              />
              <div className="nav-links-container">
              <Link to="/" className="link">SO FUNKTIONEIRTS</Link>
              <Link to="/" className="link">SUNDERANGEBOTE</Link>
              <Link to="/" className="link"><span>
                      <img src={personImg}></img>
                    </span>
                    MEIN BEREICH
                    <span>
                      <img src={arrowImg}></img>
                    </span></Link>
              </div>
            </nav>
          </div>
        </header>
        {/* {Hero Area} */}
        <div className="hero-area">
          <div className="hero-text">
            <h4>The Joke Bible</h4>
            <p>Daily Laughs for you and yours</p>
          </div>
          <input
            type="text"
            placeholder="How can we make you laugh today?"
            value=""
          ></input>
        </div>
      </div>

      {/* Other page contents are displayed here using router*/}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
