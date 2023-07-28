import React from "react";

//importando os cards
import Cardjsservicos from "./Cards/Cards_projetos/Card_js_servicos";
import Cardgflivros from "./Cards/Cards_projetos/Card_gf_livros";
import Cardcinema from "./Cards/Cards_projetos/Card_cinema";

export default function Section_cards_projeto() {
  return (
    <>
      <div
        className="row row-cols-1 row-cols-md-3 g-4 area10 reveal"
        style={{ marginLeft: "22%", marginRight: "22%", marginTop: 5 }}
      >
        <Cardjsservicos />
        <Cardgflivros />
        <Cardcinema />
      </div>
    </>
  );
}
