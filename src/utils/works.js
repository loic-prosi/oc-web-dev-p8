import imgP2 from "../assets/images/oc-web-dev-p2.jpg";
import imgP3 from "../assets/images/oc-web-dev-p3.png";
import imgP4 from "../assets/images/oc-web-dev-p4.png";
import imgP5 from "../assets/images/oc-web-dev-p5.jpg";
import imgP6 from "../assets/images/oc-web-dev-p6.jpg";
import imgP7 from "../assets/images/oc-web-dev-p7.png";

const images = {
  "oc-web-dev-p2": imgP2,
  "oc-web-dev-p3": imgP3,
  "oc-web-dev-p4": imgP4,
  "oc-web-dev-p5": imgP5,
  "oc-web-dev-p6": imgP6,
  "oc-web-dev-p7": imgP7
};

export const consolidateWorks = (works, skills) => {
  const alreadyConsolidated =
    works[0] &&
    works[0].skills &&
    works[0].skills[0] &&
    works[0].skills[0].name;

  if (alreadyConsolidated) {
    return { works };
  }

  let worksConsolidated = works;

  for (let work of works) {
    let skillsConsolidated = [];

    for (let skillId of work.skills) {
      const skill = skills.find((skill) => skillId === skill.id);
      skillsConsolidated.push(skill);
    }

    let categories = [];
    for (let skill of skillsConsolidated) {
      if (skill && skill.category && !categories.includes(skill.category)) {
        categories.push(skill.category);
      }
    }

    work.skills = skillsConsolidated;
    work.categories = categories;
    work.image = images[work.id];
  }

  return { works: worksConsolidated };
};
