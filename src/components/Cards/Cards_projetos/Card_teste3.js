import React, { useState } from "react";

import "../../../styles/main.css";
import "../../../styles/animation_card.css";

function MeuComponente() {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  const handleMouseEnter = () => {
    setMostrarTexto(true);
  };

  const handleMouseLeave = () => {
    setMostrarTexto(false);
  };

  return (
    <>
      <div
        class="col"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }}
      >
        <div class="card CardAnimation">
          <div class="card-body">
            {mostrarTexto && (
              <>
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MeuComponente;
