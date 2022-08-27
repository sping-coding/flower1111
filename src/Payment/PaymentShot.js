import React from "react";

const PaymentShot = ({ paymentlist }) => {
  console.log("PaymentShot(paymentList) =>", paymentlist.paymentList);
  return (
    <div>
      {paymentlist.paymentList?.map((pay) => (
        <div className="payList">
          <div className="payLists">주문번호 : {pay.num}</div>
          <div className="payLists payListsimg">
            <img src={pay.image_url} width="50px" height="50px" />
          </div>
          <div className="payLists">상품이름 : {pay.irum}</div>
          <div className="payLists">갯수 : {pay.quantity}</div>
          <div className="payLists">가격 : {pay.price}</div>
        </div>
      ))}
    </div>
  );
};
export default PaymentShot;
