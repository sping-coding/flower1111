import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { GrClose } from "react-icons/gr";
import { MdShoppingCart } from "react-icons/md";

function ProductDetail({ detail, openDetail, flowers, num, addToOrder }) {
  const navigate = useNavigate();
  const click = () => {
    addToOrder(flowers[num]);
  };
  return (
    <div
      className="modal_background"
      onClick={() => {
        openDetail(detail);
      }}
    >
      {/* <div
          className="btn_close"
          onClick={() => {
            openDetail(detail);
          }}
        >
          {" "}
          <GrClose />
        </div> */}
      <div
        className="productDetail"
        key={flowers && flowers[num]?.num}
        style={{ padding: "25px 0 33px 0" }}
      >
        <div className="productDetail_body">
          <img
            className="productDetail_img"
            src={flowers && flowers[num]?.image_url}
            style={{ objectFit: "contain" }}
          />
          <div className="productDetail_content">
            <div className="productDetail_title">
              <h1>{flowers && flowers[num]?.irum}</h1>
            </div>
            <div className="productDetail_middle">
              <div className="productDetail_Sname">
                학명 : {flowers && flowers[num]?.S_name}
              </div>
              <div className="productDetail_Flang">
                꽃말 : {flowers && flowers[num]?.F_langauge}
              </div>{" "}
              <div className="productDetail_flowering">
                개화시기 : {flowers && flowers[num]?.flowering}
              </div>
              <div className="productDetail_price">
                가격 : {flowers && flowers[num]?.price}원
              </div>
            </div>
            <div className="order">
              <button onClick={click}>
                <MdShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
