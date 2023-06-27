import Skills from "../../view/Skills";
import Header from "../../view/header";
import Projects from "../../view/projects";
import About from "../about";

function Main() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Skills />
      <Projects />
      <About />
    </div>
  );
}

export default Main;
