import React from "react";
import { useHistory } from "react-router-dom";

import "./header.css";
const Header = (props) => {
  const history = useHistory();
  return (
    <>
      <header className="header">
        <div
          className="header-left"
          onClick={() => {
            history.push("/");
          }}
          style={{ color: "#000" }}
        >
          <span className="header-span">Encrypted Timeseries</span>
        </div>
      </header>
      <div style={{ marginBottom: 140 }}></div>
    </>
  );
};

export default Header;
