/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//css
import "../styles/main.css";

const gean_dev = {
  href: "#",
  target: "_blank",
};
const github = {
  href: "https://github.com/geanderson-062",
  target: "_blank",
};
const curriculo = {
  href: "https://geanderson-cv.netlify.app/",
  target: "_blank",
};
const contato = {
  href: "#contato",
  target: "_blank",
};
const certificados = {
  href: "https://meu-curriculo-sigma.vercel.app/App/screens/certificados.html",
  target: "_blank",
};

//sistemas

const tempo = {
  href: "https://tempo-agora.netlify.app/",
  target: "_blank",
};
const code = {
  href: "https://g-code-editor.netlify.app/",
  target: "_blank",
};
const livros = {
  href: "https://gf-livros.netlify.app/",
  target: "_blank",
};
const player = {
  href: "https://gf-player.netlify.app/",
  target: "_blank",
};
const servicos = {
  href: "https://js-servicos-gerais.netlify.app/",
  target: "_blank",
};
const cinema = {
  href: "https://cinema-extremo-lite.netlify.app/",
  target: "_blank",
};
const defaultinfo = {
  href: "https://default-info.netlify.app/",
  target: "_blank",
};
const adotpet = {
  href: "https://adotpet.org/index.html",
  target: "_blank",
};

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar corPrimaria"
        style={{
          borderBlockEndColor: "#A020F0",
          borderBlockEndStyle: "solid",
          borderBlockEndWidth: "5px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" {...gean_dev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-code-slash"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>{" "}
            <b>Gean-Dev</b>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            style={{
              borderColor: "#A020F0",
              borderStyle: "solid",
              borderWidth: "1px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              clasName="bi bi-list"
              viewBox="0 0 16 16"
              className="text-white"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <div
            className="offcanvas offcanvas-end"
            style={{ backgroundColor: "#000" }}
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-white"
                id="offcanvasNavbarLabel"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-code-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
                Gean-Dev
              </h5>

              <button
                type="button"
                className="btn-close bg-light text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{
                  borderColor: "#A020F0",
                  borderStyle: "solid",
                  borderWidth: "2px",
                }}
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    target="_blank"
                    {...github}
                  >
                    Git-Hub{" "}
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
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    {...curriculo}
                    target="_blank"
                  >
                    Curriculo{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-bookmark-star"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z" />
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    target="_blank"
                    {...contato}
                  >
                    Contato{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sistemas{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-globe"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                    </svg>
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" target="_blank" {...tempo}>
                        Tempo agora
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" target="_blank" {...code}>
                        G code editor
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" target="_blank" {...livros}>
                        GF Livros
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" target="_blank" {...player}>
                        GF player
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        {...servicos}
                      >
                        JS serviços
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        {...curriculo}
                      >
                        Curriculo online
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" target="_blank" {...cinema}>
                        Cinema extremo lite
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        {...defaultinfo}
                      >
                        Default info
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" target="_blank" {...adotpet}>
                        Adotpet
                      </a>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mais sistemas em breve
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    target="_blank"
                    {...certificados}
                  >
                    Certificados{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-file-earmark-bar-graph"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z" />
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
