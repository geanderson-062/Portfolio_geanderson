import React, { useState } from "react";

import "../../../styles/main.css";
import "../../../styles/animation_card.css";

//import da imagem
import Imagem3 from "../../img/cinema-extremo-lite.png";

function MeuComponente() {
  const [mostrarTexto3, setMostrarTexto3] = useState(false);

  const handleMouseEnter3 = () => {
    setMostrarTexto3(true);
  };

  const handleMouseLeave3 = () => {
    setMostrarTexto3(false);
  };

  const acessar = {
    href: "#",
    target: "_blank",
  };

  const github = {
    href: "#",
    target: "_blank",
  };

  return (
    <>
      <div
        className="col"
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
        style={{ cursor: "pointer" }}
      >
        <div class="card CardAnimation" style={{ borderColor: "#000" }}>
          <img src={Imagem3} alt="Imagem" />
          <div class="card-body corPrimaria">
            {mostrarTexto3 && (
              <>
                <h5 className="card-title text-white text-center">
                  Cinema Extremo
                </h5>
                <p className="card-text text-white text-center">
                  Site de stream de video
                </p>

                <div
                  className="btn-group"
                  style={{ marginLeft: "20%", marginRight: "20%" }}
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <a
                    {...acessar}
                    type="button"
                    className="btn btn-outline-light"
                  >
                    Acessar
                  </a>
                  <a
                    {...github}
                    type="button"
                    className="btn btn-outline-light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MeuComponente;