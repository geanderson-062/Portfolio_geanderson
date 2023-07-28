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
    <h6
      className="text-center corTitulo2 fs-6 area4 reveal"
      style={{ marginLeft: "25%", marginRight: "25%", marginTop: 25 }}
    >
      Sou um desenvolvedor front-end altamente motivado e apaixonado por criar
      experiências digitais incríveis e envolventes. Com uma formação em Análise
      e Desenvolvimento de Sistemas pela Universidade UNINASSAU, adquiri
      habilidades e conhecimentos essenciais para o desenvolvimento de
      interfaces web e mobile.
    </h6>
  );
}
export default ScrollRevealComponent;
