import React from "react";

//importando cards
import Cardteste from "./Cards/Cards_destaque/Card_teste";
import Cardteste2 from "./Cards/Cards_destaque/Card_teste2";
import Cardteste3 from "./Cards/Cards_destaque/Card_teste3";

export default function Section_cards_destaque() {
  return (
    <>
      <div
        class="row row-cols-1 row-cols-md-3 g-4 area8 reveal"
        style={{ marginLeft: "22%", marginRight: "22%", marginTop: 5 }}
      >
        <Cardteste />
        <Cardteste2 />
        <Cardteste3 />
      </div>
      ;
    </>
  );
}
