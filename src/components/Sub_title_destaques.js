import React, { Component } from "react";

export default class Sub_title_projetos extends Component {
  render() {
    return (
      <>
        <div style={{ marginLeft: 20 }}>
          <h1 className="fs-1 text-white">Destaques</h1>
          <div
            style={{
              borderBlockEndColor: "#A020F0",
              borderBlockEndStyle: "solid",
              borderBlockEndWidth: "5px",
              maxWidth: 130,
            }}
          ></div>
        </div>
      </>
    );
  }
}