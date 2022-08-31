import Kakaopay from "./KakaoPay";
import React from "react";

const PaymentTurminal = () => {
    const lastnum = window.sessionStorage.getItem("totalPrice");
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <Kakaopay lastnum={lastnum}/>
        </div>
    )

}
export default PaymentTurminal;