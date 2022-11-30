import "./category-button.styles.scss";


const CategoryButton = ({category, color}) => {
    return(
    <div className="category-div" style={{ backgroundColor : color}}>{category}</div>
    );
}

export default CategoryButton;