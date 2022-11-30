import { Route } from "react-router-dom";
import arrowImg from "../../assets/01/path_2.png";
import personImg from "../../assets/01/shape.png";
import "./navigation.styles.scss";

const Navigation = () => {
    return (
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
                <ul>
                  <li className="menu">
                    <a href="">SO FUNKTIONEIRTS</a>
                  </li>
                  <li>
                    <a href="">SUNDERANGEBOTE</a>
                  </li>
                  <li>
                  <img src=""></img>
                    <a href=""><span><img src={personImg}></img></span>MEIN BEREICH <span><img src={arrowImg}></img></span></a> 
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          {/* {Hero Area} */}
          <div className="hero-area">
            <div className="hero-text">
              <h4>The Joke Bible</h4>
              <p >Daily Laughs for you and yours</p>
            </div>
            <input placeholder="How can we make you laugh today?"></input>
          </div>
        </div>
      );
}

export default Navigation