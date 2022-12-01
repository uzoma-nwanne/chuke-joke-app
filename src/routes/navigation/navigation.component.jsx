import { useState, Fragment, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import { fetchData } from "../../utils/fetch.utils";
import { loadMore, loadPrevious } from "../../features/pagination-slice";
import MyButton from "../../components/button/button.component";
import PaginationContainer from "../../components/pagination-container/pagination-container.component";

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
  const[categories, setCategories] = useState([]);
  const [allJokes, setAllJokes] = useState([]);

  const start = useSelector((state) => state.paginationCounter.start);
  const end = useSelector((state) => state.paginationCounter.end);
  console.log(`Start ${start}`);
  console.log(`End is ${end}`);
  const dispatch = useDispatch()
  //const [selectedCategory, setSelectedCategory] = useState(categories[0]);

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
  useEffect(() =>{
    const getAllJokes = async () =>{
      const allJokes = await fetchData("https://api.chucknorris.io/jokes/search?query=all");
      setAllJokes(allJokes);
    }
    getAllJokes();
  }, []);

//console.log(allJokes);

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

      <div className="main">
        <CategoriesContainer categories={categories}/>

        <PaginationContainer categories={categories} start={start} end={end}/>
      </div>

      {/* Other page contents are displayed here using router*/}
      <Outlet />

      <footer>
        <p className="footer-text">Got Jokes? Get Paid For Submitting</p>
    <div className="submit"> <p>SUBMIT JOKE  </p> <img src={submitImg} /></div>
        
        {/* <p>Front End Test 	&#169; {year}</p> */}
      </footer>
    </Fragment>
  );
};

export default Navigation;
