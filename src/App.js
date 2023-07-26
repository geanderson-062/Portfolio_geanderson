import * as React from "react";

//css
import "./styles/main.css";

//bootstrapp
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

//componentes
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Titlesobre from "./components/Title_sobre";
import Titlehabilidades from "./components/Title_habilidades";
import Titleprojetos from "./components/TItle_projetos";
import Subtitledestaques from "./components/Sub_title_destaques";
import Subtitleprojetos from "./components/Sub_title_projetos";
import Titlecontato from "./components/Title_contato";
import Textsobre from "./components/Text_sobre";
import Sectionhabilidades from "./components/Section_habilidades";

function App() {
  return (
    <>
      <div className="corPrimaria">
        <Navbar />
        <Header />
        <Titlesobre />
        <Textsobre />
        <Titlehabilidades />
        <Sectionhabilidades />
        <Titleprojetos />
        <Subtitledestaques />
        <Subtitleprojetos />
        <Titlecontato />
      </div>
    </>
  );
}

export default App;
