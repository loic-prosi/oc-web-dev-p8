const Card = ({ work, image, categories }) => {
  return (
    <div className="card">
      {image ? (
        <img className="card__image" src={image} alt={work.name} />
      ) : (
        <div className="card__image-placeholder"></div>
      )}
      <div className="card__heading">
        <h3 className="card__title">{work.name}</h3>
        <p className="card__subtitle">{work.year}</p>
      </div>
      <div className="card__categories">
        {categories &&
          categories.map((category) => (
            <span key={work.id} className="card__tag">
              {category}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card;
