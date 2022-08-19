//회원가입
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MemberForm = () => {
  const idRef = useRef(); //아이디
  const pwRef = useRef(); //비밀번호
  const pwchRef = useRef(); //비밀번호 확인
  const nickRef = useRef(); //닉네임
  const addrRef = useRef(); //주소
  const mobile1Ref = useRef(); //휴대폰 -> 앞3자리
  const mobile2Ref = useRef(); //휴대폰 -> 중간4자리
  const mobile3Ref = useRef(); //휴대폰 -> 끝4자리

  const navigate = useNavigate();

  const handleMember = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력하세요!!!");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      pwRef.current.focus();
      return false;
    }
    if (pwchRef.current.value !== pwRef.current.value) {
      alert("비밀번호가 일치하지 않습니다!!!");
      pwchRef.current.focus();
      return false;
    }
    if (nickRef.current.value === "" || nickRef.current.value === undefined) {
      alert("닉네임을 입력하세요!!!");
      nickRef.current.focus();
      return false;
    }
    if (addrRef.current.value === "" || addrRef.current.value === undefined) {
      alert("주소를 입력하세요!!!");
      addrRef.current.focus();
      return false;
    }
    if (
      mobile1Ref.current.value === "" ||
      mobile1Ref.current.value === undefined
    ) {
      alert("휴대폰번호를 입력하세요!!!");
      mobile1Ref.current.focus();
      return false;
    }

    // alert(idRef.current.value);
    // alert(pwRef.current.value);
    // alert(nickRef.current.value);
    // alert(addrRef.current.value);
    // alert(mobile1Ref.current.value);
    // alert(mobile2Ref.current.value);
    // alert(mobile3Ref.current.value);
    axios // 호출
      .post("http://localhost:8005/member", {
        id: idRef.current.value, //아이디
        pw: pwRef.current.value, //비밀번호
        nickname: nickRef.current.value, //닉네임
        addr: addrRef.current.value, //주소
        mobile1: mobile1Ref.current.value, //휴대폰 ->앞3자리
        mobile2: mobile2Ref.current.value, //휴대폰 ->중간4자리
        mobile3: mobile3Ref.current.value, //휴대폰 ->끝4자리
      })
      .then((res) => {
        console.log("handleMember =>", res);
        if (res.data.affectedRows === 1) alert("회원가입 성공!!!");
        else alert("회원가입 실패!!!");
        navigate("/");
      })
      .then((res) => {
        console.log("handleMember => ", res);
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <form>
        <h1>CAERULEA</h1>
        <div>
          <h3>ID</h3>
          <div>
            <input
              type="text"
              name="id"
              ref={idRef}
              placeholder="아이디를 입력하세요"
              defaultValue=""
            />
          </div>
          <h3>PW</h3>
          <div>
            <input
              type="password"
              name="pw"
              ref={pwRef}
              placeholder="영문+숫자+특수문자 8자리"
              defaultValue=""
            />
          </div>
          <h3>PWcheck</h3>
          <div>
            <input
              type="password"
              name="pwch"
              ref={pwchRef}
              defaultValue=""
              placeholder="비밀번호를 확인해주세요"
            />
          </div>
          <h3>NickName</h3>
          <div>
            <input
              type="text"
              name="nickname"
              ref={nickRef}
              placeholder="닉네임을 입력하세요"
              defaultValue=""
            />
          </div>
          <h3>Addr</h3>
          <div>
            <input
              type="text"
              name="addr"
              ref={addrRef}
              placeholder="주소를 입력하세요"
              defaultValue=""
            />
          </div>
          <h3>Mobile</h3>
          <div>
            <input
              type="tel"
              name="mobile1"
              ref={mobile1Ref}
              placeholder="3자리"
              size="3"
              maxLength="3"
            />
            -
            <input
              type="tel"
              name="mobile2"
              ref={mobile2Ref}
              placeholder="4자리"
              size="4"
              maxLength="4"
            />
            -
            <input
              type="tel"
              name="mobile3"
              ref={mobile3Ref}
              placeholder="4자리"
              size="4"
              maxLength="4"
            />
          </div>
          <div>
            <br></br>
          </div>
          <div>
            <input type="button" value="registration" onClick={handleMember} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
