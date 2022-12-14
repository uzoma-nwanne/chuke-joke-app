import CategoryButton from "../category-button/category-button.component";
import "./categories-container.styles.scss";

const CategoriesContainer = ({ categories }) => {
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
          <CategoryButton category={category} color={myColor} key={index} />
        );
      })}
    </div>
  );
};

export default CategoriesContainer;
