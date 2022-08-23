import "./MemberForm.css";
//회원가입
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MemberForm() {
  const idRef = useRef();
  const pwRef = useRef();
  const pwchRef = useRef();
  const nickRef = useRef();
  const addrRef = useRef();
  const mobileRef = useRef();

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
    if (pwchRef.current.value !== "" || pwRef.current.value) {
      alert("비밀번호가 일치하지 않습니다!!!");
      pwchRef.current.focus();
      return false;
    }
    if (nickRef.current.value === "" || nickRef.current.value) {
      alert("닉네임을 입력하세요!!!");
      nickRef.current.focus();
      return false;
    }
    if (addrRef.current.value === "" || addrRef.current.value) {
      alert("주소를 입력하세요!!!");
      addrRef.current.focus();
      return false;
    }
    if (
      mobileRef.current.value === "" ||
      mobileRef.current.value === undefined
    ) {
      alert("휴대폰번호를 입력하세요!!!");
      mobileRef.current.focus();
      return false;
    }

    axios
      .post("http://localhost:8005/member", {
        id: idRef.current.value,
        pw: pwRef.current.value,
        nickname: nickRef.current.value,
        addr: addrRef.current.calue,
        mobile: mobileRef.current.value,
      })
      .then((res) => {
        console.log("handleMember =>", res);
        if (res.data.affectedRows === 1) alert("회원가입 성공!!!");
        else alert("회원가입 실패!!!");
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const [allCheck, setAllCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [personalCheck, setPersonalCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setUseCheck(true);
      setPersonalCheck(true);
      setAgeCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setUseCheck(false);
      setPersonalCheck(false);
      setAgeCheck(false);
      setMarketingCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const personalBtnEvent = () => {
    if (personalCheck === false) {
      setPersonalCheck(true);
    } else {
      setPersonalCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (
      useCheck === true &&
      personalCheck === true &&
      ageCheck === true &&
      marketingCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [useCheck, personalCheck, ageCheck, marketingCheck]);

  return (
    <div className="MemberForms">
      <div>
        <form>
          <h1>CAERULEA</h1>
          <div>
            <h5>ID</h5>
            <div>
              <input
                className="memberID"
                type="text"
                name="id"
                ref={idRef}
                placeholder="아이디를 입력하세요"
                defaultValue=""
              />
            </div>
            <h5>PW</h5>
            <div>
              <input
                className="memberPW"
                type="password"
                name="pw"
                ref={pwRef}
                placeholder="영문+숫자+특수문자 8자리"
                defaultValue=""
              />
            </div>
            <h5>PWcheck</h5>
            <div>
              <input
                className="memberPWCH"
                type="password"
                name="pwch"
                ref={pwchRef}
                defaultValue=""
                placeholder="비밀번호를 확인해주세요"
              />
            </div>
            <h5>NickName</h5>
            <div>
              <input
                className="memberNickName"
                type="text"
                name="nickname"
                ref={nickRef}
                placeholder="닉네임을 입력하세요"
                defaultValue=""
              />
            </div>
            <h5>Addr</h5>
            <div>
              <input
                className="memberAddr"
                type="text"
                name="addr"
                ref={addrRef}
                placeholder="주소를 입력하세요"
                defaultValue=""
              />
            </div>
            <h5>Mobile</h5>
            <div>
              <input
                className="memberMobile"
                type="tel"
                name="mobile1"
                ref={mobileRef}
                placeholder="하이픈 '-' 생략"
                width="200px"
                maxLength="11"
              />
            </div>
            <br></br>
            <div>
              <button className="regist" onClick={handleMember}>
                registration
              </button>
            </div>
          </div>
        </form>
      </div>

      <form method="post" action="" className="agreement_Form">
        <div className="agreement_box">
          <hr />
          <div className="agreement_all">
            <input
              type="checkbox"
              id="all-check"
              checked={allCheck}
              onChange={allBtnEvent}
            />
            <label for="all-check">
              전체동의<span>(선택포함)</span>
            </label>
            <p>
              고객님의 편의를 위하여 전체동의 기능을 제공하고 있습니다.
              <br />
              전체동의 하시겠습니까?
            </p>
          </div>
          <hr />
          <div className="agreement_item">
            <input
              type="checkbox"
              id="check1"
              checked={useCheck}
              onChange={useBtnEvent}
            />
            <label for="check1">
              <span>(필수)</span>이용약관에 동의합니다.
            </label>
          </div>
          <div className="agreement_item">
            <input
              type="checkbox"
              id="check2"
              checked={personalCheck}
              onChange={personalBtnEvent}
            />
            <label for="check2">
              <span>(필수)</span>개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>
          <div className="agreement_item">
            <input
              type="checkbox"
              id="check3"
              checked={ageCheck}
              onChange={ageBtnEvent}
            />
            <label for="check3">
              <span>(필수)</span>만 14세 이상입니다.
            </label>
          </div>
          <div className="agreement_item">
            <input
              type="checkbox"
              id="check4"
              checked={marketingCheck}
              onChange={marketingBtnEvent}
            />
            <label for="check4">
              <span>(선택)</span>마케팅 정보 수신에 동의합니다.
            </label>
          </div>
          <p className="singIn">
            회원가입3,000원 쿠폰, 기간한정혜택, 신제품 소식 등은 마케팅 정보수신
            <br />
            동의(이메일,SMS모두 수신동의)시에만 받아보실 수 있습니다.
            <br />
            CAERULEA 공식 온라인몰 <a href="#">이용약관</a> 및{" "}
            <a href="#">개인정보 처리방침</a> 자세히보기
          </p>
        </div>
      </form>
    </div>
  );
}

export default MemberForm;
