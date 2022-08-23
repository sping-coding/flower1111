import React from "react";
import "./MypageForm.css";

const userid = window.sessionStorage.getItem("id");

const MyPageForm = () => {
  return (
    <div className="MyPage">
      <div className="">
        <h1>마이페이지</h1>
        <div className="mypageUSerid">
          <h3>{userid} 환영합니다!</h3>
        </div>
      </div>
    </div>
  );
};

export default MyPageForm;
