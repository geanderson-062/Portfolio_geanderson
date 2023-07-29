import { FaReact } from "react-icons/fa";

import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import "../../../styles/main.css";
import "../../../styles/animation_card.css";

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
  const [mostrarTextoReact, setMostrarTextoReact] = useState(false);

  const handleMouseEnterReact = () => {
    setMostrarTextoReact(true);
  };

  const handleMouseLeaveReact = () => {
    setMostrarTextoReact(false);
  };
  return (
    <div
      className="col"
      onMouseEnter={handleMouseEnterReact}
      onMouseLeave={handleMouseLeaveReact}
    >
      <div className="card CardAnimation" style={{ backgroundColor: "#000" }}>
        <div className="card-body text-center">
          <FaReact color="#A020F0" style={{ width: 50, height: 50 }} />
          {mostrarTextoReact && <h6 className="fs-6 corTitulo3">React js</h6>}
        </div>
      </div>
    </div>
  );
}

export default SkillIcons;
