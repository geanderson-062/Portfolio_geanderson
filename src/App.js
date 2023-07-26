import * as React from "react";

//css
import "./styles/main.css";

//bootstrapp
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

//componentes
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}

export default App;
