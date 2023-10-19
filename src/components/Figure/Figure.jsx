import Icon from "../Icon";

const Figure = ({ src, alt, name, size }) => {
  if (name) {
    return (
      <figure className="figure">
        <Icon className="figure__icon" name={name} size={size} />
      </figure>
    );
  }
  return (
    <figure className="figure">
      <img className="figure__image" src={src} alt={alt} />
    </figure>
  );
};

export default Figure;
