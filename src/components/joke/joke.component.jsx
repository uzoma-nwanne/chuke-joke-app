
import arrowImg2 from "../../assets/01/path-copy-4@2x.png";
import "./joke.styles.scss";

const JokeComponent = ({icon, category, value}) =>{
    if(category === ""){
           category = "Unclassified" ;
    }
    return(
        <div className="joke-component">
            <div className="component-header">
                <img src={icon}/>
                <h4>{category}</h4>
            </div>
            <p>
                {value}
            </p>
            <div className="stat">
                <p className="stat-link">STATS </p>
                <img src={arrowImg2} className="joke-stat"/>
            </div>
        </div>
    )
}

export default JokeComponent;