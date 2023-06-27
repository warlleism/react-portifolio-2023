import React, { useEffect } from "react";
import Data from "../../skills/skills";
import { useTranslation } from "react-i18next";
import "./style.scss";

const Skills = () => {
  const { t } = useTranslation(["home"]);

  function centerItens(value) {
    const item = document.querySelectorAll("#cards");
    if (value >= 100) {
      item.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0%)";
        }, (index + 1) * 200);
      });
    } else {
      item.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "0";
          item.style.transform = "translateY(300%)";
        }, (index + 1) * 200);
      });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      centerItens(window.scrollY);
    });
  }, []);

  return (
    <div className="skills" id="skills">
      <div className="title-skills" id="cards">
        <div id="cards">Technologies</div>
        <div id="cards">Tecnologias</div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="container-cards">
        {Data(t).map((e) => {
          return (
            <div className="card-skills" id="cards">
              <div className="container-img">
                <img src={e.img} alt="" />
              </div>
              <div>{e.tecno}</div>
              <div>{e.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
