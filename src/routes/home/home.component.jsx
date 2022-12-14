import { Fragment , useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchData } from "../../utils/fetch.utils";
import PaginationContainer from "../../components/pagination-container/pagination-container.component";
import JokeComponentContainer from "../../components/joke-component-container/joke-container.component";
import CategoriesContainer from "../../components/categories-container/categories-container.component";


const Home = () => {
  const [categories, setCategories] = useState([]);
  const [allJokes, setAllJokes] = useState([]);
  const [filteredJokes, setFilteredJokes] = useState([]);

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

  {console.log(filteredJokes);
  }
  return (
    <Fragment>
      <div className="main">
        <CategoriesContainer categories={categories} />
        <JokeComponentContainer filteredJokes={filteredJokes} />
      </div>
      <PaginationContainer categories={categories} start={start} end={end}  allJokes={allJokes}/>
    </Fragment>
  );
};

export default Home;
