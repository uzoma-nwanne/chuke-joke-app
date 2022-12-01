import { useState, Fragment, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchData } from "../../utils/fetch.utils";
import PaginationContainer from "../../components/pagination-container/pagination-container.component";
import JokeComponentContainer from "../../components/joke-component-container/joke-container.component";

import arrowImg from "../../assets/01/path_2.png";
import personImg from "../../assets/01/shape.png";
import submitImg from "../../assets/01/path-copy-4@2x.png";

import "./navigation.styles.scss";
import CategoriesContainer from "../../components/categories-container/categories-container.component";

const defaultFormFields = {
  searchString: "",
};
const Navigation = () => {
  const d = new Date();
  const year = d.getFullYear();
  const [searchField, setSearchField] = useState("");
  const [categories, setCategories] = useState([]);
  const [allJokes, setAllJokes] = useState([]);
  const [filteredJokes, setFilteredJokes] = useState([]);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const start = useSelector((state) => state.paginationCounter.start);
  const end = useSelector((state) => state.paginationCounter.end);
  const dispatch = useDispatch();
  //const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  console.log(`Start :${start}, end : ${end}`);
  // update categories
  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetchData(
        "https://api.chucknorris.io/jokes/categories"
      );
      categories.push("Uncategorized");
      setCategories(categories);
    };
    getCategories();
  }, []);

  //get All Jokes
  useEffect(() => {
    const getAllJokes = async () => {
      const allJokes = await fetchData(
        "https://api.chucknorris.io/jokes/search?query=all"
      );
      setAllJokes(allJokes);
      setFilteredJokes(
        allJokes.result.filter((joke, index) => index >= start && index < end)
      );
    };
    getAllJokes();
  }, [start, end]);

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
              <button class="toggle-button" onClick={() => setIsNavBarOpen(!isNavBarOpen)}>
                  <span class="toggle-button__bar"></span>
                  <span class="toggle-button__bar"></span>
                  <span class="toggle-button__bar"></span>
                </button>
            </nav>
          </div>
        </header>
        <nav className={isNavBarOpen? "open mobile-nav": "mobile-nav" } >
          <div class="mobile-nav__items">
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

      <div className="main">
        <CategoriesContainer categories={categories} />
        <JokeComponentContainer filteredJokes={filteredJokes} />
      </div>
      <PaginationContainer categories={categories} start={start} end={end} />
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
