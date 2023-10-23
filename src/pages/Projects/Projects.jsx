import { useLoaderData } from "react-router-dom";

import Article from "../../components/Article";
import Card from "../../components/Card";

const Projects = () => {
  const { works } = useLoaderData();
  return (
    <main className="page">
      <Article
        title="Mes projets"
        text="Découvrez la liste des projets ayant contribué à l'évolution de mes compétences."
      />
      <div className="projects__list">
        {works &&
          works.map((work) => (
            <Card
              key={work.id}
              id={work.id}
              image={work.image}
              name={work.name}
              year={work.year}
              categories={work.categories}
            />
          ))}
      </div>
    </main>
  );
};

export default Projects;
