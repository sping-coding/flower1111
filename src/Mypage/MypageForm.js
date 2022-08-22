import React from "react";
import "./MypageForm.css";

const userid = window.sessionStorage.getItem("id");

const MyPageForm = () => {
  return (
    <div className="MyPage">
      <div>{userid}</div>
    </div>
  );
};

export default MyPageForm;
