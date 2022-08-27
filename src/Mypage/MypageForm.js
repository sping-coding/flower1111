import React from "react";
import "./MypageForm.css";
import PaymentList from "../Payment/PaymentList";
import { BsFillArrowRightCircleFill, BsBoxSeam, BsTruck } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";

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
        <p>{usernick} 님 반갑습니다</p>
      </div>
      <div className="MyPagesDet">
        <div className="MyPagesDetID">
          <p>아이디 &nbsp;:</p>
          <p>{userid}</p>
        </div>
        <div className="MyPagesDetAddr">
          <p>주소 &nbsp;: </p>
          <p>{useraddr}</p>
        </div>
        <div className="MyPagesDetTel">
          <p>전화번호&nbsp; :</p>
          <p>{usertel}</p>
        </div>
      </div>
      <div className="MypageDelivers">
        <div className="MypageD MypageDBlue">
          <p className="MypageDDB">발송준비중</p>
          <BsBoxSeam size="37" />
          <p className="MypageDD">주문하신 상품을 준비하고 있습니다.</p>
        </div>
        <div className="MypageArrow">
          <BsFillArrowRightCircleFill size="37" />
        </div>
        <div className="MypageD">
          <p>배송중</p>
          <BsTruck size="37" />
          <p className="MypageDD">택배사로 상품이 전달되었습니다.</p>
        </div>
        <div className="MypageArrow">
          <BsFillArrowRightCircleFill size="37" />
        </div>
        <div className="MypageD">
          <p>배송완료</p>
          <FaBoxOpen size="37" />
          <p className="MypageDD">고객님께 상품이 배송되었습니다.</p>
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
