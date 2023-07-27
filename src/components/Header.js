import React, { useEffect, useState } from "react";
import lottie from "lottie-web";
import animationData from "../animation/animation.json"; // Substitua pelo caminho para o arquivo JSON de animação
import ScrollReveal from "scrollreveal";

function LottieAnimation() {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    const container = document.getElementById("lottie-container");

    lottie.loadAnimation({
      container: container,
      animationData: animationData,
      autoplay: true,
      loop: true, // Defina como false se desejar que a animação não seja repetida em loop
    });

    setAnimationLoaded(true);

    // Retornar uma função de limpeza no caso de desmontagem do componente
    return () => {
      lottie.destroy(); // Limpa a instância da animação quando o componente é desmontado
    };
  }, []);

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
        style={{
          display: "flex",
          alignItems: "flex-start",
          borderBlockEndColor: "#000",
          borderBlockEndStyle: "solid",
          borderBlockEndWidth: "5px",
          marginTop: 60,
        }}
        className="corPrimaria  area2 reveal"
      >
        <div style={{ flex: 1 }}>
          {/* Coloque aqui os elementos que deseja que fiquem à esquerda */}
          <div>
            <br />
            <h1 className="fs-3 corTitulo1" style={{ marginLeft: 20 }}>
              Olá, eu sou o
            </h1>
            <h1 className="fs-3 corTitulo3" style={{ marginLeft: 20 }}>
              Geanderson ferreira
            </h1>
            <h1 className="fs-3 corTitulo2" style={{ marginLeft: 20 }}>
              Desenvolvedor Front-end.
            </h1>
            <br />
            <div
              className="d-grid gap-2 d-md-flex justify-content"
              style={{ marginBlockEnd: 20 }}
            >
              <button
                style={{ marginLeft: 20 }}
                type="button"
                class="btn btn-outline-light"
              >
                <svg
                  style={{ marginRight: 10 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Git-hub
              </button>
              <button
                style={{ marginLeft: 20 }}
                type="button"
                class="btn btn-outline-light"
              >
                <svg
                  style={{ marginRight: 10 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-arrow-down-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                  />
                </svg>
                Dowload CV
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "300px", // Defina a largura máxima da animação conforme necessário
          }}
        >
          {!animationLoaded && <p>Carregando animação...</p>}
          <div id="lottie-container"></div>
        </div>
      </div>
    </>
  );
}

export default LottieAnimation;
