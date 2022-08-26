import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { BsPersonFill, BsPerson } from "react-icons/bs";
import Logo from "../images/로고.png";

const Navbar = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate("/products");
  };

  const goToLogin = () => {
    navigate("/login");
  };
  const goToMember = () => {
    navigate("/member");
  };

  const goToBoard = () => {
    navigate("/board");
  };

  const gotoHome = () => {
    navigate("/");
  };
  const gotoMypage = () => {
    navigate("/mypage");
  };

  const userid = window.sessionStorage.getItem("id");
  const usernick = window.sessionStorage.getItem("nick");

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
        <div onClick={gotoHome} className="MainLogo">
          <img src={Logo} />
        </div>
        <div className="MainMenu">
          <button className="MainMenuFBtn" onClick={goToProduct}>
            쇼핑몰
          </button>
          {/* <span>I</span> */}
          <button className="MainMenuSBtn" onClick={goToBoard}>
            커뮤니티
          </button>
          {/* <span>I</span> */}
          <button className="NavbarBtn">
            <Dropdown>
              <Dropdown.Toggle variant="dark">
                <BsPerson className="navPerson" size="27px" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={goToLogin}>로그인</Dropdown.Item>
                <Dropdown.Item onClick={goToMember}>회원가입</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </button>
        </div>
      </div>
    );
  } else if (userid !== null) {
    return (
      <div className="MainNavBar">
        <div className="MainLogo" onClick={gotoHome}>
          <img src={Logo} />
        </div>
        <div className="MainMenu">
          <button onClick={goToProduct}>쇼핑몰</button>
          <button onClick={goToBoard}>커뮤니티</button>
          <button>
            <Dropdown>
              <Dropdown.Toggle variant="dark">
                <BsPersonFill className="navPerson" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>{usernick} 님 환영합니다</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
                <Dropdown.Item onClick={gotoMypage}>마이페이지</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </button>
        </div>
      </div>
    );
  }
};

export default Navbar;
