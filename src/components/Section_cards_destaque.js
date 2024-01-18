import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

//importando cards
import Cardonebit from "./Cards/Cards_destaque/Card_coin";
import Cardbrazilian from "./Cards/Cards_destaque/Card_velha";
import Cardvelha from "./Cards/Cards_destaque/Card_onebit";
import CardOnde from "./Cards/Cards_destaque/Card_onde";

function Section_cards_destaque() {
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
        className="row row-cols-1 row-cols-md-2 g-4 area8 reveal"
        style={{ marginLeft: "22%", marginRight: "22%", marginTop: 5 }}
      >
        <Cardvelha />
        <Cardbrazilian />
        <Cardonebit />
        <CardOnde />
      </div>
    </>
  );
}

export default Section_cards_destaque;
