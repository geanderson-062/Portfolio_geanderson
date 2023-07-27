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
    <p
      className="fs-6 text-center corTitulo2 area14 reveal"
      style={{ marginBlockEnd: 60 }}
    >
      Gean-Dev ©2023 , Inc
    </p>
  );
}
export default ScrollRevealComponent;
