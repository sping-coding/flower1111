import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/products");
  };

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="MainNavBar">
      <div className="MainLogo">Caerulea</div>
      <div className="MainMenu">
        <button onClick={goToProduct}>쇼핑몰</button>
        <span>I</span>
        <button>커뮤니티</button>
        <span>I</span>
        <button>공지사항</button>
        <span>I</span>
        <button onClick={goToLogin}>로그인</button>
      </div>
    </div>
  );
};

export default Navbar;
