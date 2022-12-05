import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";

import { fetchData } from "../../utils/fetch.utils";
import { fetchAsyncAllJokes } from "../../features/category-slice";
import PaginationContainer from "../../components/pagination-container/pagination-container.component";
import JokeComponentContainer from "../../components/joke-component-container/joke-container.component";
import CategoriesContainer from "../../components/categories-container/categories-container.component";

import "./home.styles.scss";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const allJokes = useSelector((state) => state.selectedCategory.jokes);
  const start = useSelector((state) => state.paginationCounter.start);
  const end = useSelector((state) => state.paginationCounter.end);
 const dispatch = useDispatch();
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
    dispatch(fetchAsyncAllJokes());
  }, []);

  
 const filteredJokes =  allJokes.result.filter((joke, index) => index >= start && index < end)
  
  return (
    <Fragment>
      <div className="home">
        <div className="main">
          <CategoriesContainer categories={categories}/>
          <JokeComponentContainer filteredJokes={filteredJokes} />
        </div>
        <PaginationContainer
          categories={categories}
          start={start}
          end={end}
          allJokes={allJokes}
        />
      </div>
    </Fragment>
  );
};

export default Home;
