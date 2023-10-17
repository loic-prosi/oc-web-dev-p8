import { useLoaderData } from "react-router-dom";

import Icon from "../../components/Icon";
import Card from "../../components/Card";

const Home = () => {
  const { works } = useLoaderData();
  return (
    <main className="home">
      <section className="introduction">
        <div className="introduction__left-container">
          <Icon className="navbar__logo" name="logo" size="300px" />
        </div>
        <article className="introduction__right-container">
          <h2 className="introduction__title">Développeur web front-end</h2>
          <p className="introduction__text">
            Passionné par le développement web depuis quelques années, j'utilise
            mon expertise dans la conception d'interfaces.
          </p>
          <nav className="introduction__navigation">
            <ul className="introduction__links">
              <li>
                <a
                  className="introduction__link"
                  href="https://github.com/loic-prosi"
                >
                  <Icon name="fa github" size="0.8em" />
                  Github
                </a>
              </li>
              <li>
                <a
                  className="introduction__link"
                  href="https://www.linkedin.com/in/lo%C3%AFc-prosi-03954a172/"
                >
                  <Icon name="fa linkedin" size="0.8em" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </article>
      </section>
      <section className="projects">
        <div className="projects__heading">
          <h2 className="projects__title">Mes projets</h2>
          <div className="projects__title-separator"></div>
        </div>
        <div className="projects__list">
          {works &&
            works.map((work) => (
              <Card
                key={work.id}
                work={work}
                image={work.image}
                categories={work.categories}
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
