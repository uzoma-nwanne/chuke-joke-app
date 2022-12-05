import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCategory } from '../../features/category-slice';
import CategoryButton from "../category-button/category-button.component";
import "./categories-container.styles.scss";

const CategoriesContainer = ({ categories, allJokes }) => {
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const handleClick = (e)=>{
    dispatch(setCategory(e.target.value));
    navigate("/category");
  }

  const color = [
    "red",
    "blue",
    "gold",
    "yellow",
    "purple",
    "grey",
    "fuschia",
    "green",
  ];
  const total = categories.length;
  return (
    <div className="categories-container">
      {categories.map((category, index) => {
        let no = 0;
        if (index !== 0) {
            no = total % index;
        } 
        const myColor = color[no];
        return (
          <CategoryButton category={category} color={myColor} key={index} onClick={handleClick} />
        );
      })}
    </div>
  );
};

export default CategoriesContainer;
