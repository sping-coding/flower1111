import "./LoginForm.css";
// 로그인
import { useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { IoIosText } from "react-icons/io";

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
          navigate("/");
        } else {
          alert("로그인 실패");
          navigate("/");
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
    <div className="LoginForms" align="center">
      <form>
        <h1>CAERULEA</h1>
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
        <div>
          <hr></hr>
          <a href="#">아이디 찾기</a>|<a href="#">비밀번호 찾기</a>|
          <Link to="/member">회원등록</Link>
          <hr></hr>
        </div>
        <br></br>
        <div className="kakaoL">
          <div className="icon">
            <IoIosText size="25" />{" "}
          </div>
          <span className="klog">카카오 로그인</span>
        </div>
        <br></br>
        <div className="NaverL">
          <div className="N">N</div>
          <span className="nlog">네이버 로그인</span>
        </div>
      </form>
      <div></div>
    </div>
  );
};
export default LoginForm;