import React, { useEffect, useState } from "react";
import lottie from "lottie-web";
import animationData from "../animation/animation.json"; // Substitua pelo caminho para o arquivo JSON de animação

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

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          borderBlockEndColor: "#A020F0",
          borderBlockEndStyle: "solid",
          borderBlockEndWidth: "5px",
        }}
        className="corPrimaria"
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
              Desenvolvedor Front-end Web .
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
                Git-hub
              </button>
              <button
                style={{ marginLeft: 20 }}
                type="button"
                class="btn btn-outline-light"
              >
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
