import "./LoginForm.css";
// 로그인
import { Component, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { IoIosText } from "react-icons/io";
import { BsImages } from "react-icons/bs";
import loginim from "./로그인이미지.jpg";

const LoginForm = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력하세요!!!");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("패스워드를 입력하세요!!!");
      pwRef.current.focus();
      return false;
    }

    console.log(
      "LoginForm:window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("id")
    );

    axios
      .post("http://localhost:8005/login", {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((res) => {
        console.log("handleLogin =>", res);
        if (res.data[0].cnt === 1) {
          window.sessionStorage.setItem("id", idRef.current.value);
          window.sessionStorage.setItem("nick", res.data[0].nickname);
          window.sessionStorage.setItem("tel", res.data[0].tel);
          window.sessionStorage.setItem("addr", res.data[0].addr);
          window.sessionStorage.setItem("cnt", res.data[0].cnt);
          navigate("/");
        } else {
          alert("로그인 실패");
          navigate("/login");
        }
      })

      .catch((e) => {
        console.error(e);
      });
  };

  const handleMemberForm = () => {
    navigate("/member");
  };

  return (
    <div>
      <div className="LoginForm">
        <div className="LoginForms" align="center">
          <form>
            <h1>Login</h1>
            <div>
              <input
                className="ID"
                type="text"
                name="id"
                size="20"
                ref={idRef}
                placeholder="아이디"
              ></input>
            </div>
            &nbsp;
            <div>
              <input
                className="PW"
                type="password"
                name="pw"
                size="20"
                ref={pwRef}
                placeholder="비밀번호"
                // errorMsg={errors.password && "올바른 형식이 아닙니다!"}
              ></input>
            </div>
            <div>
              <br></br>
            </div>
            <p>
              <input
                className="login"
                type="button"
                value="로그인"
                onClick={handleLogin}
              ></input>
            </p>
            <div className="LoginA">
              <hr></hr>
              <a href="#">아이디 찾기</a>&nbsp;|&nbsp;
              <a href="#">비밀번호 찾기</a>
              &nbsp;|&nbsp;
              <Link to="/member">회원등록</Link>
              <hr></hr>
            </div>
            <br></br>
            <div className="kakaoL">
              <div className="iconss">
                <IoIosText size="25" />{" "}
              </div>
              <span className="klog">카카오 로그인</span>
            </div>
            <div className="NaverL">
              <div className="N">N</div>
              <span className="nlog">네이버 로그인</span>
            </div>
            {/* <div className="facebookL">
              <div className="f">f</div>
              <span className="flog">페이스북 로그인</span>
            </div> */}
          </form>
        </div>
        <div>
          <img className="loginimage" src={loginim} />
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
