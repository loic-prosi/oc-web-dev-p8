const Tag = ({ type, text }) => {
  const className = type && type === "card" ? "tag tag--card" : "tag";
  return <span className={className}>{text}</span>;
};

export default Tag;
