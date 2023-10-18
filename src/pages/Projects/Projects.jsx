import { useLoaderData } from "react-router-dom";

import Card from "../../components/Card";

const Projects = () => {
  const { works } = useLoaderData();
  return (
    <main className="projects">
      <article className="projects__introduction">
        <h2 className="projects__title">Mes projets</h2>
        <p className="projects__text">
          Vous trouverez ci-dessous la liste de mes projets front-end et
          back-end. Ces différents travaux m'ont permis d'améliorer mes
          compétences.
        </p>
      </article>
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
