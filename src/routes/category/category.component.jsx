import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../utils/fetch.utils";
import { resetCount } from "../../features/pagination-slice";

import "./category.styles.scss";
import JokeFooter from "../../components/joke-footer/joke-footer.component";

const CategoryView = () => {
  const selectedCategory = useSelector(
    (state) => state.selectedCategory.selectedCategory
  );

  const count = useSelector((state) => state.paginationCounter.count);
  const jokeList = useSelector((state) => state.jokeStatistics.jokeList);
  
  //const trendingJokeList = jokeList.sort().filter((joke, index) => index < 10);
  const dispatch = useDispatch();
  const [jokes, setJokes] = useState([]);
  const [filteredJokes, setFilteredJokes] = useState([]);

  //get All Jokes
  useEffect(() => {
    const getAllJokes = async () => {
      const jokes = await fetchData(
        "https://api.chucknorris.io/jokes/search?query=all"
      );
      setJokes(jokes);
      setFilteredJokes(
        jokes.result.filter((joke) =>
          joke.categories.toString().toLowerCase().includes(selectedCategory)
        )
      );
    };
    getAllJokes();
  }, []);

  if (count >= filteredJokes.length) {
    dispatch(resetCount());
  }
  return (
    <div className="category-view">
      <div className="left">
        <div className="joke-container">
          <div className="joke-container__header">
            <div className="badge">
              {selectedCategory ? selectedCategory : "Undefined"}
            </div>
            <p className="joke-container__header--trending">.Trending</p>
          </div>
          <p className="joke-value">{filteredJokes[count]?.value}</p>
        </div>
        <div className="joke-footer"></div>
        <JokeFooter joke={filteredJokes[count]} />
      </div>
      {/* End Left Div */}

      <div className="right">
        <div className="trending">
          <h4 className="trending-header">THE TOP 10 JOKES</h4>
          <ul>
              {jokeList.map((joke) => (
                <li key={joke.id}>{joke.value}</li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
