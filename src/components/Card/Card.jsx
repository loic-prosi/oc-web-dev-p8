import { Link } from "react-router-dom";

const Card = ({ id, name, year, image, categories }) => {
  return (
    <Link className="card" to={`/projects/${id}`}>
      {image ? (
        <img className="card__image" src={image} alt={name} />
      ) : (
        <div className="card__image-placeholder"></div>
      )}
      <div className="card__heading">
        <h3 className="card__title">{name}</h3>
        <p className="card__subtitle">{year}</p>
      </div>
      <div className="card__categories">
        {categories &&
          categories.map((category) => (
            <span key={id} className="card__tag">
              {category}
            </span>
          ))}
      </div>
    </Link>
  );
};

export default Card;
