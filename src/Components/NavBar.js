import React from "react";
import Toggle from "./Toggle";
import "./Style/Nav.css";
function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="img-container">
          <img src="https://result.election.gov.np/Images/ecn-logo.png" />
          <span> Live Update</span>
        </div>
        <div>
          <h1>प्रतिनिधिसभा निर्वाचन २०७९</h1>
        </div>
        <div>
          <Toggle />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
