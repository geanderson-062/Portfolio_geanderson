import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../styles/main.css";
import "../styles/animation_card.css";

//import dos cards
import Email from "./Cards/Cards_contato/Card_Email";
import GitHub from "./Cards/Cards_contato/Card_github";
import Whatsapp from "./Cards/Cards_contato/Card-whatsapp";
import Linkedin from "./Cards/Cards_contato/Card_linkedin";

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
      className="container area13 reveal"
      style={{
        marginTop: 30,
        marginBlockEnd: 100,
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
        <Email />
        <GitHub />
        <Linkedin />
        <Whatsapp />
      </div>
    </div>
  );
}

export default SkillIcons;
