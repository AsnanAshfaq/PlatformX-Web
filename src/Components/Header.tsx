import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  const handleSignOut = () => {
    console.log("Handling sign out");

    localStorage.setItem("access_token", "");
    navigate("/signin");
  };

  const moveToHome = () => {};
  return (
    <div className="container-fluid">
      <div className="row" style={{ flex: 1 }}>
        <div className="mx-3 mt-2" style={{ flex: 0.9 }}>
          <h3
            style={{
              color: "white",
              fontFamily: "sans-serif",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => moveToHome()}
          >
            PlatformX
          </h3>
        </div>
        <div
          className="mx-3 mt-4"
          style={{
            flex: 0.1,
            justifyItems: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <h2
            style={{ color: "white", fontSize: 16, cursor: "pointer" }}
            onClick={() => handleSignOut()}
          >
            Sign Out
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
