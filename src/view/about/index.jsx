import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./style.scss";

const About = () => {
  const { t } = useTranslation(["home"]);

  useEffect(() => {
    var altura = window.innerHeight;

    window.addEventListener("scroll", () => {
      if (altura <= 700) {
        if (window.scrollY >= 1600) {
          centerItens();
        }
      } else if (window.scrollY >= 2200) {
        centerItens();
      }
    });
  }, []);

  function centerItens() {
    const item = document.querySelectorAll("#column");

    item.forEach((item, index) => {
      setTimeout(() => {
        item.style.transform = "translateY(0%)";
      }, (index + 1) * 200);
    });
  }

  return (
    <div className="sobre-mim" id="sobre">
      <div className="titulo-sobre-mim">
        <div id="column">{t("sobreMim.estudos")}</div>
        <div id="column">{t("sobreMim.sobre-mim")}</div>
        <div id="column">{t("sobreMim.text")}</div>
      </div>

      <div className="timeline">
        <div className="column" id="column">
          <div className="title">
            <h1> 2021 </h1>
            <h2>{t("sobreMim.titulo-1")}</h2>
          </div>
          <div className="description">
            <p>{t("sobreMim.desc-1")}</p>
          </div>
        </div>

        <div className="column right" id="column">
          <div className="title">
            <h1>2022</h1>
            <h2>{t("sobreMim.titulo-2")}</h2>
          </div>
          <div className="description right-border">
            <p>{t("sobreMim.desc-2")}</p>
          </div>
        </div>

        <div className="column" id="column">
          <div className="title">
            <h1>2022</h1>
            <h2>{t("sobreMim.titulo-3")}</h2>
          </div>
          <div className="description">
            <p>{t("sobreMim.desc-3")}</p>
          </div>
        </div>

        <div className="column right" id="column">
          <div className="title">
            <h1>2022 </h1>
            <h2>{t("sobreMim.titulo-4")}</h2>
          </div>
          <div className="description right-border">
            <p>{t("sobreMim.desc-4")}</p>
          </div>
        </div>

        <div className="column" id="column">
          <div className="title">
            <h1>2022</h1>
            <h2>{t("sobreMim.titulo-5")}</h2>
          </div>
          <div className="description">
            <p>{t("sobreMim.desc-5")}</p>
          </div>
        </div>

        <div className="column right" id="column">
          <div className="title">
            <h1>2022</h1>
            <h2>{t("sobreMim.titulo-6")}</h2>
          </div>
          <div className="description right-border">
            <p>{t("sobreMim.desc-6")}</p>
          </div>
        </div>

        <div className="column" id="column">
          <div className="title">
            <h1>2023</h1>
            <h2>{t("sobreMim.titulo-7")}</h2>
          </div>
          <div className="description">
            <p>{t("sobreMim.desc-7")}</p>
          </div>
        </div>

        <div className="column right" id="column">
          <div className="title">
            <h1>2023</h1>
            <h2>{t("sobreMim.titulo-8")}</h2>
          </div>
          <div className="description right-border">
            <p>{t("sobreMim.desc-8")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
