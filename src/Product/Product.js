import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import Order from "./Order";
import { MdShoppingCart } from "react-icons/md";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

function Product() {
  // 꽃 리스트 저장
  const [flowerList, setFlowerList] = useState([]);

  // 꽃 리스트
  const flowerGetList = () => {
    // Ajax 구현
    axios
      .get("http://localhost:8005/flowers", {}) // {} 빈 객체 전달
      // index.js에 있는 result를 res가 전달 받음
      .then((res) => {
        // res에 뭐가 들어있는지 확인하고 싶으면 콘솔로그 찍기
        const { data } = res;
        setFlowerList({
          // data를 boardList에 저장
          // 상태값이 바뀌면 리렌더링이 되면서 목록이 나타남
          flowerList: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const flowers = flowerList.flowerList;

  // 풀 리스트 저장
  const [pulipList, setPulipList] = useState([]);

  // 풀 리스트
  const pulipGetList = () => {
    // Ajax 구현
    axios
      .get("http://localhost:8005/pulips", {}) // {} 빈 객체 전달
      // index.js에 있는 result를 res가 전달 받음
      .then((res) => {
        // res에 뭐가 들어있는지 확인하고 싶으면 콘솔로그 찍기
        const { data } = res;
        setPulipList({
          // data를 boardList에 저장
          // 상태값이 바뀌면 리렌더링이 되면서 목록이 나타남
          pulipList: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const pulips = pulipList.pulipList;

  // 상품 리스트 저장
  const [productList, setProductList] = useState([]);

  // 풀 리스트
  const productGetList = () => {
    // Ajax 구현
    axios
      .get("http://localhost:8005/products", {}) // {} 빈 객체 전달
      // index.js에 있는 result를 res가 전달 받음
      .then((res) => {
        // res에 뭐가 들어있는지 확인하고 싶으면 콘솔로그 찍기
        const { data } = res;
        setProductList({
          // data를 boardList에 저장
          // 상태값이 바뀌면 리렌더링이 되면서 목록이 나타남
          productList: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const products = productList.productList;

  // 장바구니 목록
  const [orders, setOrders] = useState([]);

  // 장바구니 담는 함수
  const addToOrder = useCallback((flower) => {
    setOrders((orders) => {
      // 이미 담은 상품인지 확인하는 과정
      const finded = orders.find((order) => order.num === flower.num);
      const { num, irum, price, image_url } = flower;

      // 담긴 상품이 아니면
      if (finded === undefined) {
        // 새로 데이터를 return
        return [...orders, { num, irum, price, image_url, quantity: 1 }]; // 처음 담긴 상품이니까 quantity가 1
      }
      // 이미 담긴 상품 이면 quantity를 1 올려줘야함
      else {
        return orders.map((order) => {
          if (order.num === num) {
            return {
              num,
              irum,
              price,
              image_url,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);

  const addToOrder_pulip = useCallback((pulip) => {
    setOrders((orders) => {
      // 이미 담은 상품인지 확인하는 과정
      console.log("orders 너 뭐야!!!", orders);
      const finded = orders.find((order) => order.num === pulip.num);
      const { num, irum, price, image_url } = pulip;

      // 담긴 상품이 아니면
      if (finded === undefined) {
        // 새로 데이터를 return
        return [...orders, { num, irum, price, image_url, quantity: 1 }]; // 처음 담긴 상품이니까 quantity가 1
      }
      // 이미 담긴 상품 이면 quantity를 1 올려줘야함
      else {
        return orders.map((order) => {
          if (order.num === num) {
            return {
              num,
              irum,
              price,
              image_url,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);

  // 장바구니 상품 제거 함수
  const remove = useCallback((num) => {
    setOrders((orders) => {
      return orders.filter((order) => order.num !== num);
    });
  }, []);

  // 전체 제거 함수
  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  // @@@@@ 오류나는 부분 @@@@@

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { num, quantity } = order;
        const product = products.find((p) => p.num === num);
        if (quantity > 3) {
          return product.price * 3;
        } else {
          return product.price * quantity;
        }
      })
      .reduce((totalPrice, currentPrice) => totalPrice + currentPrice, 0);
  }, [orders, products]); // orders와 flowers가 변할 때마다 실행

  // @@@@@@@@@@@@@@@@@@@@@@@@@@

  // const totalPrice = useMemo(() => {
  //   return orders
  //     .map((order) => {
  //       const { num, quantity } = order;
  //       const product = flowers.find((p) => p.num === num);
  //       return product.price * quantity;
  //     })
  //     .reduce((totalPrice, currentPrice) => totalPrice + currentPrice, 0);
  // }, [orders, flowers]); // orders와 flowers가 변할 때마다 실행

  // 0 : 꽃 , 1 : 풀잎 , 2 : 포장지
  const [actionMode, setActionMode] = useState({ mode: 0 });

  const next = () => {
    setActionMode({
      ...actionMode,
      mode: actionMode.mode + 1,
    });
  };
  const prev = () => {
    setActionMode({
      ...actionMode,
      mode: actionMode.mode - 1, // 글수정하기
    });
  };

  const [detail, setDetail] = useState(false);
  const [productNum, setProductNum] = useState(0);

  const openDetail = (e) => {
    setDetail(!detail);
    setProductNum(e.target.id);
  };

  useEffect(() => {
    productGetList();
    flowerGetList();
    pulipGetList();
  }, []);

  if (actionMode.mode === 0) {
    return (
      <>
        <div className="container">
          <main>
            <div className="shoppingFront">
              <h2>
                <br />
                꽃을 선택해주세요{" "}
              </h2>
            </div>
            <div className="prototypes">
              {flowers &&
                flowers.map((flower, index) => {
                  const click = () => {
                    addToOrder(flower);
                  };
                  return (
                    <div className="prototype" key={flower.num}>
                      <div style={{ padding: "0px 0 33px 0" }}>
                        <img
                          className="prototype_artwork prototype__edit"
                          src={flower.image_url}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="prototype__body">
                        <div className="prototype__title">{flower.irum}</div>
                        <p className="prototype__price">{flower.price}원</p>
                      </div>
                      <div className="prototype_detail" key={flower.num}>
                        <button
                          className="prototype_detailBTN"
                          id={index}
                          onClick={openDetail}
                        >
                          상세보기
                        </button>
                        <div
                          className="btn btn--primary float--right addIcon"
                          onClick={click}
                        >
                          <MdShoppingCart />
                        </div>
                        {detail === true ? (
                          <ProductDetail
                            detail={detail}
                            openDetail={openDetail}
                            flowers={flowers}
                            num={productNum}
                            addToOrder={addToOrder}
                          />
                        ) : null}
                      </div>
                    </div>
                  );
                })}
            </div>
          </main>
          <div className="goToNextBtn" onClick={next}>
            <IoIosArrowForward size="80px" />
          </div>
          <Order
            orders={orders}
            products={products}
            remove={remove}
            totalPrice={totalPrice}
            removeAll={removeAll}
          />
        </div>
      </>
    );
  } else if (actionMode.mode === 1) {
    return (
      <>
        <div className="container">
          <main>
            <div className="shoppingFront">
              <h2>
                <br />
                그린소재을 선택해주세요{" "}
              </h2>
              <div className="goToPrevBtn" onClick={prev}>
                <IoIosArrowBack size="80" />
              </div>
            </div>
            <div className="prototypes">
              {pulips &&
                pulips.map((pulip) => {
                  const click = () => {
                    addToOrder_pulip(pulip);
                  };
                  return (
                    <div className="prototype" key={pulip.num}>
                      <div style={{ padding: "0px 0 33px 0" }}>
                        <img
                          className="prototype_artwork prototype__edit hiss"
                          src={pulip.image_url}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="prototype__body">
                        <div className="prototype__title">{pulip.irum}</div>
                        <p className="prototype__price">{pulip.price}원</p>
                      </div>
                      <div className="float--right" onClick={click}>
                        <MdShoppingCart />
                      </div>
                    </div>
                  );
                })}
            </div>
          </main>
          <div className="prototype__change"></div>
          <Order
            orders={orders}
            products={products}
            remove={remove}
            totalPrice={totalPrice}
            removeAll={removeAll}
          />
        </div>
      </>
    );
  }
}
export default Product;
