import React, { useState } from "react";

import "../../../styles/main.css";
import "../../../styles/animation_card.css";

function MeuComponente() {
  const [mostrarTextoEmail, setMostrarTextoEmail] = useState(false);

  const handleMouseEnterEmail = () => {
    setMostrarTextoEmail(true);
  };

  const handleMouseLeaveEmail = () => {
    setMostrarTextoEmail(false);
  };

  const Email = {
    href: "mailto:geanderson062@outlook.com",
    target: "_blank",
  };

  return (
    <>
      <a {...Email} style={{ textDecoration: "none" }}>
        <div
          className="col area14C reveal"
          onMouseEnter={handleMouseEnterEmail}
          onMouseLeave={handleMouseLeaveEmail}
          style={{ cursor: "pointer" }}
        >
          <div
            className="card CardAnimation"
            style={{ backgroundColor: "#000" }}
          >
            <div className="card-body text-center">
              <svg
                style={{ marginBlockEnd: 10, color: "#A020F0" }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              {mostrarTextoEmail && (
                <>
                  <h6 className="fs-6 corTitulo3">
                    Clique para contatar pelo Email
                  </h6>
                </>
              )}
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default MeuComponente;
