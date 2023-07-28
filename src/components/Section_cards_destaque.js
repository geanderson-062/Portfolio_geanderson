import React from "react";

//importando cards
import Cardonebit from "./Cards/Cards_destaque/Card_coin";
import Cardbrazilian from "./Cards/Cards_destaque/Card_velha";
import Cardvelha from "./Cards/Cards_destaque/Card_onebit";

export default function Section_cards_destaque() {
  return (
    <>
      <div
        className="row row-cols-1 row-cols-md-3 g-4 area8 reveal"
        style={{ marginLeft: "22%", marginRight: "22%", marginTop: 5 }}
      >
        <Cardvelha />
        <Cardbrazilian />

        <Cardonebit />
      </div>
    </>
  );
}
