import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { UseState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/products");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToBoard = () => {
    navigate("/board");
  };
  const { log, SetLog } = useState(false);

  return (
    <div className="MainNavBar">
      <div className="MainLogo">Caerulea</div>
      <div className="MainMenu">
        <button onClick={goToProduct}>쇼핑몰</button>
        <span>I</span>
        <button onClick={goToBoard}>커뮤니티</button>
        <span>I</span>
        <button onClick={goToLogin}>로그인</button>
      </div>
    </div>
  );
};

export default Navbar;
