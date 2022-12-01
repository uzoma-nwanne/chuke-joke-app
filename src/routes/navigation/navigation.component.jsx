import { useState, Fragment, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";


import arrowImg from "../../assets/01/path_2.png";
import personImg from "../../assets/01/shape.png";
import submitImg from "../../assets/01/path-copy-4@2x.png";

import "./navigation.styles.scss";


const Navigation = () => {
  const d = new Date();
  const year = d.getFullYear();
  const [searchField, setSearchField] = useState("");
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <Fragment>
      <div className="App">
        {/* Header Area  */}
        <header>
          <div>
            <nav className="nav-links-container">
              <div className="nav-links-container">
                <Link to="/" className="link">
                  SO FUNKTIONEIRTS
                </Link>
                <Link to="/" className="link">
                  SUNDERANGEBOTE
                </Link>
                <Link to="/" className="link">
                  <span>
                    <img src={personImg}></img>
                  </span>
                  MEIN BEREICH
                  <span>
                    <img src={arrowImg}></img>
                  </span>
                </Link>
              </div>
              <button className="toggle-button" onClick={() => setIsNavBarOpen(!isNavBarOpen)}>
                  <span className="toggle-button__bar"></span>
                  <span className="toggle-button__bar"></span>
                  <span className="toggle-button__bar"></span>
                </button>
            </nav>
          </div>
        </header>
        <nav className={isNavBarOpen? "open mobile-nav": "mobile-nav" } >
          <div className="mobile-nav__items">
            <Link to="/" className="mobile-nav__item">
              SO FUNKTIONEIRTS
            </Link>
            <Link to="/" className="mobile-nav__item">
              SUNDERANGEBOTE
            </Link>
            <Link to="/" className="mobile-nav__item">
              <span>
                <img src={personImg}></img>
              </span>
              MEIN BEREICH
              <span>
                <img src={arrowImg}></img>
              </span>
            </Link>
          </div>
        </nav>
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

      <footer>
        <p className="footer-text">Got Jokes? Get Paid For Submitting</p>
        <div className="submit">
          {" "}
          <p>SUBMIT JOKE </p> <img src={submitImg} />
        </div>

        {/* <p>Front End Test 	&#169; {year}</p> */}
      </footer>
    </Fragment>
  );
};

export default Navigation;
