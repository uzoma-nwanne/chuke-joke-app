import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../utils/fetch.utils";
import { resetCount } from "../../features/pagination-slice";

import "./category.styles.scss";
import JokeFooter from "../../components/joke-footer/joke-footer.component";

const SearchView = () => {
  const searchText = useSelector((state) => state.search.search);

  const count = useSelector((state) => state.paginationCounter.count);
  const dispatch = useDispatch();
  const [jokes, setJokes] = useState([]);
  const [filteredJokes, setFilteredJokes] = useState([]);

  //get All Jokes
  useEffect(() => {
    const searchJoke = async () => {
      const jokes = await fetchData(
        `https://api.chucknorris.io/jokes/search?query= ${searchText.toLocaleLowerCase()}`
      );
      setJokes(jokes);
      setFilteredJokes(
        jokes.result
      );
    };
    searchJoke();
  }, []);
 console.log(filteredJokes);
  if (count >= filteredJokes.length) {
    dispatch(resetCount());
  }
  return (
    <div className="category-view">
      <div className="left">
        <div className="joke-container">
          <div className="joke-container__header">
            <div className="badge">
              {filteredJokes[count]?.categories?.toString() ? filteredJokes[count].categories.toString() : "Undefined"}
            </div>
            <p className="joke-container__header--trending">.Trending</p>
          </div>
          <p className="joke-value">{filteredJokes[count]?.value}</p>
        </div>
        <div className="joke-footer"></div>
        <JokeFooter />
      </div>
      {/* End Left Div */}

      <div className="right">
        <div className="trending">
          <h4 className="trending-header">THE TOP 10 JOKES</h4>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
