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

  const goToBoard = () => {
    navigate("/board");
  };

  const userid = window.sessionStorage.getItem("id");

  const handleLogout = () => {
    console.log("handleLogout");
    window.sessionStorage.clear();
    console.log(
      "handleLogout:window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("id")
    );
    navigate("/"); // 로그인 페이지로 이동
  };

  if (userid === null) {
    return (
      <div className="MainNavBar">
        <div className="MainLogo"> Caerulea</div>
        <div className="MainMenu">
          <button onClick={goToProduct}>쇼핑몰</button>
          <span>I</span>
          <button onClick={goToBoard}>커뮤니티</button>
          <span>I</span>
          <button onClick={goToLogin}>로그인</button>
        </div>
      </div>
    );
  } else if (userid !== null) {
    return (
      <div className="MainNavBar">
        <div className="MainLogo">
          {/* Caerulea */}
          {userid} 님 환영합니다
        </div>
        <div className="MainMenu">
          <button onClick={goToProduct}>쇼핑몰</button>
          <span>I</span>
          <button onClick={goToBoard}>커뮤니티</button>
          <span>I</span>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      </div>
    );
  }
};

export default Navbar;
