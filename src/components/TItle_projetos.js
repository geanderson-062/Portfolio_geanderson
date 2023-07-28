import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import "../styles/main.css";

function ScrollRevealComponent() {
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
    <h1
      className="text-white fs-1 text-center area7 reveal"
      style={{ marginTop: 50 }}
      s
    >
      Projetos
    </h1>
  );
}

export default ScrollRevealComponent;
