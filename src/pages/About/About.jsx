import Icon from "../../components/Icon";

import cv from "../../assets/cv.pdf";

const About = () => {
  return (
    <main className="about-page">
      <section className="about">
        <article className="about__introduction">
          <header className="about__heading">
            <h2 className="about__title">Loïc Prosi</h2>
          </header>
          <p className="about__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            veniam enim iusto quia eveniet vel culpa vitae tempore praesentium
            magni, veritatis ratione aut iure autem libero neque quis rerum
            officia.
          </p>
          <p className="about__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            veniam enim iusto quia eveniet vel culpa vitae tempore praesentium
            magni, veritatis ratione aut iure autem libero neque quis rerum
            officia.
          </p>
          <p className="about__description">
            Cliquez sur le lien ci-dessous pour télécharger mon CV.
          </p>
          <br />
          <a className="error__home-link" href={cv} download>
            Télécharger mon CV
          </a>
        </article>
        <div className="about__logo-container">
          <Icon name="logo" size="50%" />
        </div>
      </section>
    </main>
  );
};

export default About;
