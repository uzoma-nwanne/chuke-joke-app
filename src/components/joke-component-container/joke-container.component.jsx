import JokeComponent from "../joke/joke.component";
import "./joke-container.styles.scss";

const JokeComponentContainer = ({ filteredJokes }) => {
  return (
    <div className="joke-component-container">
      {filteredJokes.map((joke) => {
        return (
          <JokeComponent
            key={joke.id}
            icon={joke.icon_url}
            cat={joke.categories}
            value={joke.value}
          />
        );
      })}
    </div>
  );
};

export default JokeComponentContainer;
