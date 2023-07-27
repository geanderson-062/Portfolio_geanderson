import React, { Component } from "react";

export default class Sub_title_projetos extends Component {
  render() {
    return (
      <>
        <div style={{ marginLeft: "23%" }}>
          <h1 className="fs-4 text-white">Todos os projetos</h1>
          <div
            style={{
              borderBlockEndColor: "#A020F0",
              borderBlockEndStyle: "solid",
              borderBlockEndWidth: "5px",
              maxWidth: 200,
            }}
          ></div>
        </div>
      </>
    );
  }
}
