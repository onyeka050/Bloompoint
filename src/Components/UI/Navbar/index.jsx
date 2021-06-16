import React, { useState } from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import Logo from "../../../assets/images/bloompoint_logo.png";

import Button from "../Button";

import "./index.scss";

const Navbar = (props) => {
  const [change, setChange] = useState(false);
  const changePosition = 150;

  const position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  const navStyle = {
    transition: "all 0.5s",
    boxShadow: change ? "0px 2px 13px -4px rgba(0,0,0,0.15)" : "unset",
    backgroundColor: change ? "#fff" : "transparent",
    position: "fixed",
    zIndex: 999,
    top: 0,
    right: 0,
    left: 0,
  };

  return (
    <>
      <nav className="nav" style={navStyle}>
        <div className="nav_content">
          <div className="nav_logo">
            <img src={Logo} alt="logo" />
            Bloompoint
          </div>

          <div className="nav_items">
            <div className="auth signup_btn">
              <Button primary className="btn" onClick={() => props.openModal()}>
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
