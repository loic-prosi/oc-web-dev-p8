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
          <p className="project__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            omnis voluptatum velit. Delectus sapiente laboriosam rem laborum
            repellat tenetur quo, incidunt cum. Fugiat veniam atque aperiam ad
            corporis cumque et.
          </p>
          <p className="project__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eius
            illum tempora, harum praesentium a laboriosam quam possimus, dolore,
            ducimus veniam aliquid dicta necessitatibus quae! Quae repellendus
            blanditiis modi provident.
          </p>
        </article>
        <div className="project__image-container">
          <img className="project__image" src={work.image} alt={work.name} />
        </div>
      </section>
    </main>
  );
};

export default Project;
