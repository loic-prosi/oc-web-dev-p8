import { useLoaderData } from "react-router-dom";

import Article from "../../components/Article";

const Project = () => {
  const { work } = useLoaderData();

  return (
    <main className="project-page">
      <section className="project">
        <Article
          info={work.year}
          title={work.name}
          tags={work.skillsNames}
          text={work.description}
        />
        <div className="project__image-container">
          <img className="project__image" src={work.image} alt={work.name} />
        </div>
      </section>
    </main>
  );
};

export default Project;
