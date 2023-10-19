import Article from "../../components/Article";
import SideContent from "../../components/SideContent";

import cv from "../../assets/cv.pdf";

const About = () => {
  return (
    <main className="page">
      <section className="section">
        <Article
          title="Loïc Prosi"
          text={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam enim iusto quia eveniet vel culpa vitae tempore praesentium magni, veritatis ratione aut iure autem libero neque quis rerum officia. 
          
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam enim iusto quia eveniet vel culpa vitae tempore praesentium magni, veritatis ratione aut iure autem libero neque quis rerum officia.

          Cliquez sur le lien ci-dessous pour télécharger mon CV.`}
          links={[
            {
              size: "large",
              name: "Télécharger mon CV",
              url: cv,
              download: true
            }
          ]}
        />
        <SideContent icon="logo" size="50%" />
      </section>
    </main>
  );
};

export default About;
