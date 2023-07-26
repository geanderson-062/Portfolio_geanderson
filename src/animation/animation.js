import React, { useEffect, useState } from "react";
import lottie from "lottie-web";
import animationData from "./animation.json"; // Substitua pelo caminho para o arquivo JSON de animação

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
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        {/* Coloque aqui os elementos que deseja que fiquem à esquerda */}
        <p style={{ marginTop: 50, marginLeft: 20 }}>
          Outros elementos à esquerda
        </p>
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
  );
}

export default LottieAnimation;
