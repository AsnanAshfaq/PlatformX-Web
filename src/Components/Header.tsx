import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row" style={{ flex: 1 }}>
        <div className="mx-3 mt-2" style={{ flex: 0.8 }}>
          <h2 style={{ color: "white" }}>PlatformX</h2>
        </div>
        <div
          className="mx-3 mt-4"
          style={{
            flex: 0.2,
            justifyItems: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <h2 style={{ color: "white", fontSize: 16 }}>Sign Out</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
