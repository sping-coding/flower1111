import React from "react";
import "./MypageForm.css";

const MypageForm = () => {
  return (
    <div className="MyPages">
      <div className="MyPagesWel">
        <h4>My PAGE</h4>
        <h2>뭐시기 님 반갑습니다</h2>
      </div>
      <div>
        <div>
          <p>주소 |</p>
          <p>주소입력값</p>
        </div>
        <div>
          <p>전화번호 |</p>
          <p>전화번호입력값</p>
        </div>
      </div>
      <div>
        <h3>주문조회</h3>
      </div>
    </div>
  );
};

export default MypageForm;
