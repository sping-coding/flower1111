import React from "react";
import "./MypageForm.css";
import PaymentList from "../Payment/PaymentList";

const MypageForm = () => {
  const usernick = window.sessionStorage.getItem("nick");
  const useraddr = window.sessionStorage.getItem("addr");
  const usertel = window.sessionStorage.getItem("tel");
  const userid = window.sessionStorage.getItem("id");

  console.log(usernick, useraddr, usertel);

  return (
    <div className="MyPages">
      <div className="MyPagesWel">
        <p>마이페이지</p>
        <h2>{usernick} 님 반갑습니다</h2>
      </div>
      <div className="MyPagesDet">
        <div className="MyPagesDetID">
          <p>아이디 | </p>
          <p>{userid}</p>
        </div>
        <div className="MyPagesDetAddr">
          <p>주소 | </p>
          <p>{useraddr}</p>
        </div>
        <div className="MyPagesDetTel">
          <p>전화번호 |</p>
          <p>{usertel}</p>
        </div>
      </div>
      <div className="MyPageLook">
        <h3>주문조회</h3>
        <PaymentList />
      </div>
    </div>
  );
};

export default MypageForm;
