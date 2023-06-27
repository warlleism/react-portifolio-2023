import { useEffect } from "react";
import Carousel from "../../components/caroussel/caroussel";
import "./style.scss";

const Projects = () => {
  function centerItens(value) {
    var altura = window.innerHeight;

    const item = document.getElementById("projetos");
    console.log(altura);
    if (altura <= 700) {
      item.style.opacity = "1";
      item.style.transform = "translateX(0%)";
    } else {
      if (value >= 2013) {
        item.style.opacity = "1";
        item.style.transform = "translateX(0%)";
      }
      if (value >= 3500 || value < 2000) {
        item.style.opacity = "0";
        item.style.transform = "translateX(300%)";
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      centerItens(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="projetos" id="projetos">
      <Carousel />
    </div>
  );
};

export default Projects;
