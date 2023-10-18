import { useLoaderData } from "react-router-dom";

import Article from "../../components/Article";
import Card from "../../components/Card";

const Projects = () => {
  const { works } = useLoaderData();
  return (
    <main className="projects">
      <Article
        title="Mes projets"
        text="Vous trouverez ci-dessous la liste de mes projets front-end et
          back-end. Ces différents travaux m'ont permis d'améliorer mes
          compétences."
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
