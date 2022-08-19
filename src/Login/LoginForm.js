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
          navigate("/products");
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
      <p></p>
      <form>
        <div>
          {/* 아이디 */}
          {/* <tr>
            <td width="100px">아이디</td>
            <td align="left" width="200px"> */}

          <div>
            <input
              type="text"
              name="id"
              size="20"
              ref={idRef}
              placeholder="아이디를 입력하세요"
            ></input>
          </div>
          {/* </td>
          </tr> */}
          {/* 패스워드 */}
          {/* <tr>
            <td width="100px">패스워드</td>
            <td align="left" width="200px"> */}
          <div>
            <input
              type="password"
              name="pw"
              size="20"
              ref={pwRef}
              placeholder="비밀번호를 입력해주세요"
            ></input>
          </div>
          {/* </td>
          </tr> */}
          {/* <tr> */}
          {/* 로그인 + 회원등록 */}
          {/* <td colSpan="2" align="center"> */}
          <div>
            <input type="button" value="로그인" onClick={handleLogin}></input>
            &nbsp;
            <input
              type="button"
              value="회원등록"
              onClick={handleMemberForm}
            ></input>
          </div>
          {/* </td>
          </tr> */}
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
