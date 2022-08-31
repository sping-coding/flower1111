import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import PaymentShot from "./PaymentShot";


const PaymentList = () => {
    const [paymentList, setPaymentList] = useState([]);
    const paymentGetList = () => {
        axios
          .post("http://localhost:8005/payment") 
          .then((res) => {
            console.log("PaymentList(res.data)=>",res.data);
            setPaymentList({
              paymentList: res.data,
            });
          })
          .catch((e) => {
            console.error(e);
          });
          
    };

     useEffect(() => {
        paymentGetList();
     },[]);


    return(
        <>
        <PaymentShot paymentlist={paymentList} />
        
        </>
    )
}

export default PaymentList;