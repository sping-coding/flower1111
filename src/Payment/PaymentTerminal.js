import Kakaopay from "./KakaoPay";
import React from "react";
import "./PaymentTerminal.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import kakaologo from "./카카오로고.png";
import naverlogo from "./네이버로고.jpg";

const PaymentTurminal = () => {
  const lastnum = window.sessionStorage.getItem("totalPrice");
  return (
    <div className="PaymentBoxB">
      <div className="PaymentBoxBack">
        <div className="PaymentBoxTitle">
          <h3>
            <span>HUN</span> 결제
          </h3>
          <p>안전하고 편리한 결제 서비스</p>
        </div>

        <div className="PaymentBox">
          <div className="PaymentBoxOne">
            <div className="PaymentBoxOneFirst" type="button">
              <img src={kakaologo} />

              <Kakaopay lastnum={lastnum} />
            </div>
            <div className="PaymentBoxOneSecond" type="button">
              <img src={naverlogo} />
              네이버페이
            </div>
          </div>

          <div className="PaymentBoxTwo">
            <div className="PaymentBoxTwoF" type="button">
              <div className="PaymentBoxTwoFIcon">
                <BsFillPlusCircleFill size="27" />
              </div>
              <p>현대카드</p>
            </div>
            <div type="button" className="PaymentBoxTwoS">
              <div className="PaymentBoxTwoFIcon">
                <BsFillPlusCircleFill size="27" />
              </div>
              <p>삼성카드</p>
            </div>
          </div>
          <div className="PaymentBoxFour">
            <div className="FourBorder" type="button">
              KB국민
            </div>
            <div className="FourBorder" type="button">
              비씨(페이북)
            </div>
            <div className="FourBorder" type="button">
              신한카드
            </div>
            <div className="FourBorder" type="button">
              NH농협
            </div>
          </div>
          <div className="PaymentBoxFour">
            <div className="FourBorder" type="button">
              하나카드
            </div>
            <div className="FourBorder" type="button">
              씨티카드
            </div>
            <div className="FourBorder" type="button">
              롯데카드
            </div>
            <div className="FourBorder" type="button">
              UnionPay
            </div>
          </div>
          <div>
            <div className="FourBorder phonepay" type="button">
              휴대폰결제
            </div>
          </div>
          <div className="emptypayBox"></div>
          <div>
            <div className="lastpayBox">
              <div className="FourBorder lastpayBoxRight">PAYCO</div>
              <p>&nbsp;</p>
              <div className="FourBorder lastpayBoxRight">L.pay</div>
              <p>&nbsp;</p>
              <div className="FourBorder">그외결제</div>
            </div>
          </div>
        </div>
      </div>
      <div className="PaymentsideBox">
        <div className="PaymentsideBoxF">
          <h3>HUN결제</h3>
          <p>X</p>
        </div>
        <div className="PaymentsideBoxS">
          <h4>회사명</h4>
          <h4>CAERULEA</h4>
        </div>
        <div className="PaymentsideBoxT">
          <h4>결제금액</h4>
          <h4>{lastnum}</h4>
        </div>
      </div>
    </div>
  );
};
export default PaymentTurminal;
