import React from "react";
import "./MypageForm.css";

const MypageForm = () => {
  const usernick = window.sessionStorage.getItem("nick");
  const useraddr = window.sessionStorage.getItem("addr");
  const usertel = window.sessionStorage.getItem("tel");

  console.log(usernick, useraddr, usertel);

  return (
    <div className="MyPages">
      <div className="MyPagesWel">
        <p>MY PAGE</p>
        <h2>{usernick} 님 반갑습니다</h2>
      </div>
      <div className="MyPagesDet">
        <div className="MyPagesDetAddr">
          <p>주소 | </p>
          <p>{useraddr}</p>
        </div>
        <div className="MyPagesDetTel">
          <p>전화번호 |</p>
          <p>{usertel}</p>
        </div>
      </div>
      <div>
        <h3>주문조회</h3>
      </div>
    </div>
  );
};

export default MypageForm;
