// 로그인
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form>
        <h1>CAERULEA</h1>
        <h3>ID</h3>
        <div>
          <input
            type="text"
            name="id"
            size="20"
            ref={idRef}
            placeholder="아이디를 입력하세요"
          ></input>
        </div>
        <h3>PW</h3>
        <div>
          <input
            type="password"
            name="pw"
            size="20"
            ref={pwRef}
            // placeholder="영문+숫자+특수문자 8자리 이상으로 설정해주세요"
            // errorMsg={errors.password && "올바른 형식이 아닙니다!"}
          ></input>
        </div>
        <div>
          <br></br>
        </div>
        <div>
          <input type="button" value="로그인" onClick={handleLogin}></input>
          &nbsp;
          <input
            type="button"
            value="회원등록"
            onClick={handleMemberForm}
          ></input>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
