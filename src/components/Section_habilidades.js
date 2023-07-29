import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../styles/main.css";
import "../styles/animation_card.css";

//import cards
import Githubcard from "./Cards/Cards_habilidades/Card_github";
import Figmacard from "./Cards/Cards_habilidades/Card_figma";
import Csscard from "./Cards/Cards_habilidades/Card_css";
import Htmlcard from "./Cards/Cards_habilidades/Card_html";
import Reactcard from "./Cards/Cards_habilidades/Card_react";
import Bootstrapcard from "./Cards/Cards_habilidades/Card_bootstrap";

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
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{
          marginTop: 15,
          marginBlockEnd: 30,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <Reactcard />
        <Htmlcard />
        <Csscard />
        <Bootstrapcard />
        <Figmacard />
        <Githubcard />
      </div>
    </div>
  );
}

export default SkillIcons;
