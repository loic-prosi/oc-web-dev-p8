import { useLoaderData } from "react-router-dom";

import Article from "../../components/Article";
import SideContent from "../../components/SideContent";

const Project = () => {
  const { work } = useLoaderData();

  return (
    <main className="page">
      <section className="section">
        <Article
          info={work.year}
          title={work.name}
          tags={work.skillsNames}
          text={work.description}
        />
        <SideContent image={work.image} alt={work.name} />
      </section>
    </main>
  );
};

export default Project;
