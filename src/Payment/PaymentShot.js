import React from "react";

const PaymentShot = ({paymentlist}) => {
    console.log("PaymentShot(paymentList) =>", paymentlist.paymentList)
    return(
        <div>
        {paymentlist.paymentList?.map((pay) => (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                주문번호 : {pay.num}
                            </td>
                            <td>
                                이미지 : <img src={pay.image_url} width="50px" height="50px"/>
                            </td>
                            <td>
                                상품이름 : {pay.irum}
                            </td>
                            <td>
                                갯수 : {pay.quantity}
                            </td>
                            <td>
                                가격 : {pay.price}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ))}
     
        </div>
    )
}
export default PaymentShot;