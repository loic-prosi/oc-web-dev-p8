import { Link } from "react-router-dom";

import Icon from "../Icon";

const Article = ({ info, title, text, tags, links }) => {
  const renderTags = () => {
    return tags.map((tag, index) => (
      <span key={`${index}-${tag}`} className="article__tag">
        {tag}
      </span>
    ));
  };

  const renderLinks = () => {
    return links.map((link, index) => {
      const { size, name, url, icon, iconSize, download } = link;

      const isLargeLink = size && size === "large";
      const linkClassName = `article__link ${
        isLargeLink ? "article__link--large" : ""
      }`;

      if (download) {
        return (
          <a
            key={`${index}-${name}`}
            className={linkClassName}
            href={url}
            download
          >
            {icon && <Icon name={icon} size={iconSize} />}
            {name}
          </a>
        );
      }

      return (
        <Link key={`${index}-${name}`} className={linkClassName} to={url}>
          {icon && <Icon name={icon} size={iconSize} />}
          {name}
        </Link>
      );
    });
  };

  return (
    <article className="article">
      <header className="article__heading">
        {info && <p className="article__info">{info}</p>}
        <h2 className="article__title">{title}</h2>
      </header>
      {tags && <div className="article__tags">{renderTags()}</div>}
      <p className="article__text">{text}</p>
      {links && <div className="article__links">{renderLinks()}</div>}
    </article>
  );
};

export default Article;
