import React from "react";
import "./PaymentShot.css";

const PaymentShot = ({ paymentlist }) => {

  // var paymentDate = new Date();
  // var paymentMonth = paymentDate.getMonth() + 1 ;
  // var paymentDay = paymentDate.getDate() + 2;
  var paymentTotalPrice = 0;
  var paymentCtn = true;
  // {`paymentShot ${paymentCtn ? "paymentfirst" : "paymentsecond"}`}
  return (
    <div className="divInline">
      {paymentlist.paymentList?.map((pay) => (
        <div className="paymentTotalShot">
          <div className="paymentTableImg">
            <img src={pay.image_url} width="120px" height="120px" />
          </div>
          <div className="paymentTableIrum">{pay.irum}</div>
          <div className="paymentTableQuantity">갯수 : {pay.quantity}</div>
          <div className="paymentTablePrice">{pay.price}원</div>
          <div className="paymentPlus">
          {console.log(paymentCtn)}
            {paymentCtn = !paymentCtn}
            
            {(paymentTotalPrice = paymentTotalPrice + parseInt(pay.price))}
          </div>
        </div>
      ))}
      <div>총 가격 : {paymentTotalPrice}</div>
    </div>
  );
};
export default PaymentShot;
