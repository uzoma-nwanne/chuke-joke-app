import "./pagination-container.styles.scss";
import MyButton from "../button/button.component";
import moreIcon from "../../assets/01/path-copy-7.png";
import lessIcon from "../../assets/01/path-copy-8.png";
import { loadMore, loadPrevious } from "../../features/pagination-slice";
import { useSelector, useDispatch } from 'react-redux'


const PaginationContainer = ({categories, start, end}) => {
    const dispatch = useDispatch();
  return (
    <div className="pagination">
      {start === 0 ? (
        <MyButton
          label={"View Previous"}
          icon={lessIcon}
          color={"#0a0a0b"}
          bg={"#ffffff"}
          onClick ={()=> loadPrevious()}
        />
      ) : (
        <p></p>
      )}
      {end < categories.length ? (
        <MyButton
          label={"View More"}
          icon={moreIcon}
          color={"#0a0a0b"}
          bg={"#ffffff"}
          onClick={()=>loadMore()}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default PaginationContainer;
