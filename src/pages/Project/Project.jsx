import { useLoaderData } from "react-router-dom";

const Project = () => {
  const { work } = useLoaderData();

  const renderSkills = () => {
    return work.skillsNames.map((skillName, index) => (
      <span key={`${index}-${skillName}`} className="project__skill">
        {skillName}
      </span>
    ));
  };

  return (
    <main className="projects-page">
      <section className="project">
        <article className="project__introduction">
          <header className="project__heading">
            <span className="project__year">{work.year}</span>
            <h2 className="project__title">{work.name}</h2>
          </header>
          <div className="project__skills">{renderSkills()}</div>
          <p className="project__description">{work.description}</p>
        </article>
        <div className="project__image-container">
          <img className="project__image" src={work.image} alt={work.name} />
        </div>
      </section>
    </main>
  );
};

export default Project;
