import React from "react";

//importando os cards
import Cardteste from "./Cards/Cards_projetos/Card_teste";

export default function Section_cards_projeto() {
  return (
    <>
      <div
        class="row row-cols-1 row-cols-md-3 g-4 area10 reveal"
        style={{ marginLeft: "22%", marginRight: "22%", marginTop: 5 }}
      >
        <Cardteste />
      </div>
      ;
    </>
  );
}
