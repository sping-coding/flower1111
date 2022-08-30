import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./PaymentForm.css";
import MainSecondPicChange from "../components/MainSecondPicChange";
import img1 from "./paymentImg/ac861aeafd1e7d76cdca067b62c5be73.jpg";
import img2 from "./paymentImg/cappuccino_rose_bouque2112t.jpg";
import PaymentList from "./PaymentList";
import { useNavigate, Link } from "react-router-dom";

const PaymentForm = () => {
  console.log("PaymentForm");

  var user_nickname = window.sessionStorage.getItem("id");

  const [value, setValue] = useState("");

  const [msgValue, setMsgValue] = useState("");

  const [pay, setPay] = useState({
    // 응답에서 가져올 값들
    next_redirect_pc_url: "",
    tid: "",
    // 요청에 넘겨줄 매개변수들
    params: {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "초코파이", //상품명
      quantity: 1,
      total_amount: 2200, //결제금액
      vat_amount: 200,
      tax_free_amount: 0,
      approval_url: "http://localhost:3000/",
      fail_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/",
    },
  });

  useEffect(() => {
    const { params } = pay;
    axios({
      url: "https://kapi.kakao.com/v1/payment/ready",
      method: "POST",
      headers: {
        Authorization: "KakaoAK 87105da4391b25ac4286abaa508070c7",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params,
    }).then((response) => {
      const {
        data: { next_redirect_pc_url, tid },
      } = response;
      console.log("url=>", next_redirect_pc_url);
      console.log(tid);
      setPay({ next_redirect_pc_url, tid, params });
    });
  }, []);

  const { next_redirect_pc_url } = pay;

  const onChange = (e) => {
    setValue(e.target.value);
    if (e.target.id === "msg_input") {
      setMsgValue(e.target.value);
    }
  };

  return (
    <div className="payment_body">
      <form>
        <table align="center" border="1" width="85%">
          <tbody>
            <tr>
              <td className="payment_title">
                <h1>결제 확인</h1>
              </td>
            </tr>
            <tr>
              <td className="payment_list">
                <PaymentList />
              </td>
            </tr>
            <tr>
              <td className="payment_message_title">
                <h1>메세지 카드</h1>
              </td>
            </tr>
            <tr>
              <td className="payment_message">
                <MainSecondPicChange onChange={onChange} msgValue={msgValue} />
              </td>
            </tr>
            <tr>
              <td className="payment_message_input">
                <input
                  id="msg_input"
                  type="text"
                  name="msg_input"
                  onChange={onChange}
                  value={msgValue}
                  placeholder="마음을 전할 메세지를 작성하세요"
                />
              </td>
            </tr>
            <tr>
              <td className="payment_radio_title">
                <h1>포장 방법을 고르세요</h1>
              </td>
            </tr>
            <tr>
              <td className="payment_radio_">
                <label>
                  <input type="radio" name="img" value="a" checked />
                  <img src={img1} className="payment_img" />
                </label>
                <label>
                  <input type="radio" name="img" value="b" />
                  <img src={img2} className="payment_img" />
                </label>
              </td>
            </tr>
            <tr>
              <td className="payment_addr">
                <p>주소</p>
              </td>
            </tr>
            <tr>
              <td className="payment_addr_input">
                <input type="text" name="addr_input" onChange={onChange} />
              </td>
            </tr>
            <tr>
              <td className="payment_user">
                <p>받는 분</p>
              </td>
            </tr>
            <tr>
              <td className="payment_user_input">
                <input
                  type="text"
                  name="user_input"
                  onChange={onChange}
                  placeholder={user_nickname}
                />
              </td>
            </tr>
            <tr>
              <td className="payment_button">
                {/* <Link to={next_redirect_pc_url}>{next_redirect_pc_url}</Link> */}
                <a href={next_redirect_pc_url}>결제하기</a>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default PaymentForm;
