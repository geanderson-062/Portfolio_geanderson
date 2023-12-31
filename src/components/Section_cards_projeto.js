import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

//importando os cards
import Cardjsservicos from "./Cards/Cards_projetos/Card_js_servicos";
import Cardgflivros from "./Cards/Cards_projetos/Card_gf_livros";
import Cardcinema from "./Cards/Cards_projetos/Card_cinema";

function Section_cards_projeto() {
  const github = {
    href: "https://github.com/geanderson-062?tab=repositories",
    target: "_blank",
  };
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
    <>
      <div
        className="row row-cols-1 row-cols-md-3 g-4 area10 reveal"
        style={{ marginLeft: "22%", marginRight: "22%", marginTop: 5 }}
      >
        <Cardjsservicos />
        <Cardgflivros />
        <Cardcinema />
        <div />
        <div
          className="btn-group area13C reveal"
          role="group"
          aria-label="Basic outlined example"
        >
          <a {...github} type="button" class="btn btn-outline-light fs-5">
            Mais projetos
            <svg
              style={{ marginLeft: 5 }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default Section_cards_projeto;
