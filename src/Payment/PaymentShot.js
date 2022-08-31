import React from "react";
import "./PaymentShot.css";

const PaymentShot = ({ paymentlist }) => {
  var paymentTotalPrice = 0;
  const paymentSaveData = () => {
    sessionStorage.setItem("totalPrice", paymentTotalPrice);
  };

  return (
    <div className="divInline">
      <div>
        <br />
        <br />

        <h2>주문 목록</h2>
        <hr />
      </div>
      {paymentlist.paymentList?.map((pay) => (
        <div className="paymentTotalShot">
          <div className="paymentText">
            <hr />
            <br />
            <img
              src={pay.image_url}
              className="paymentShotImage"
              width="200px"
              height="200px"
            />
            <p>{pay.irum}</p>
            <p className="paymentText_p">
              {pay.price}원 ({pay.quantity}ea)
            </p>
            <hr />
          </div>
          <div className="paymentPlus">
            {(paymentTotalPrice = paymentTotalPrice + parseInt(pay.price))}
          </div>
        </div>
      ))}
      <div className="totalText">총 가격 : {paymentTotalPrice}</div>
      {paymentSaveData()}
    </div>
  );
};
export default PaymentShot;
