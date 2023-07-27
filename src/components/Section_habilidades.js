import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaPython,
  FaFigma,
  FaGithub,
} from "react-icons/fa";

import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../styles/main.css";

function SkillIcons() {
  useEffect(() => {
    // Configuração do Scroll Reveal
    ScrollReveal().reveal(".reveal", {
      delay: 200, // Atraso antes da animação começar em milissegundos
      duration: 1000, // Duração da animação em milissegundos
      distance: "30px", // Distância que o elemento se moverá na animação
      origin: "bottom", // Origem da animação (top, bottom, left, right)
      easing: "ease-out", // Easing function para a animação (pode ser "linear", "ease-in", "ease-out", "ease-in-out")
      reset: true, // Define se a animação deve ser refeita sempre que o elemento se tornar visível novamente
    });
  }, []);
  return (
    <div
      className="container area6 reveal"
      style={{
        marginTop: 30,
        borderColor: "#A020F0",
        borderStyle: "solid",
        borderWidth: 5,
        borderRadius: 10,
        maxWidth: "55%",
      }}
    >
      <div
        className="row row-cols-1 row-cols-md-4 g-4"
        style={{
          marginTop: 15,
          marginBlockEnd: 30,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <div className="col">
          <div className="card" style={{ backgroundColor: "#000" }}>
            <div className="card-body text-center">
              <FaReact color="#A020F0" style={{ width: 50, height: 50 }} />
              <h6 className="fs-6 corTitulo3">React js</h6>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ backgroundColor: "#000" }}>
            <div className="card-body text-center">
              <FaHtml5 color="#A020F0" style={{ width: 50, height: 50 }} />
              <h6 className="fs6 corTitulo3">Html</h6>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ backgroundColor: "#000" }}>
            <div className="card-body text-center">
              <FaCss3Alt color="#A020F0" style={{ width: 50, height: 50 }} />
              <h6 className="fs6 corTitulo3">CSS</h6>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ backgroundColor: "#000" }}>
            <div className="card-body text-center">
              <FaPhp color="#A020F0" style={{ width: 50, height: 50 }} />
              <h6 className="fs6 corTitulo3">PHP</h6>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ backgroundColor: "#000" }}>
            <div className="card-body text-center">
              <FaPython color="#A020F0" style={{ width: 50, height: 50 }} />
              <h6 className="fs6 corTitulo3">Python</h6>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ backgroundColor: "#000" }}>
            <div className="card-body text-center">
              <FaFigma color="#A020F0" style={{ width: 50, height: 50 }} />
              <h6 className="fs6 corTitulo3">Figma</h6>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ backgroundColor: "#000" }}>
            <div className="card-body text-center">
              <FaReact color="#A020F0" style={{ width: 50, height: 50 }} />
              <h6 className="fs-6 corTitulo3">React native</h6>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" style={{ backgroundColor: "#000" }}>
            <div className="card-body text-center">
              <FaGithub color="#A020F0" style={{ width: 50, height: 50 }} />
              <h6 className="fs6 corTitulo3">Github</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillIcons;
