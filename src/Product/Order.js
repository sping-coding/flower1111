import axios from "axios";
import { useNavigate } from "react-router-dom";

function Order({ orders, products, remove, removeAll, totalPrice }) {
  console.log("장바구니 목록", orders);

  const navigate = useNavigate();
  const checkOut = () => {
    axios
      .post("http://localhost:8005/orders", {
        orders,
      })
      .then((res) => {
        console.log(res);
        console.log("장바구니에 물품이 담겼습니다!!");
        navigate("/payment");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">Caerulea's Shopping Mall Cart</div>
          <div className="subtitle">No Items</div>
        </div>
      </aside>
    );
  }
  return (
    <aside>
      <div className="Nempty">
        <div className="body">
          {orders.map((order) => {
            const { num } = order;
            const product = products.find((p) => p.num === num);

            // 장바구니 물품제거 함수
            const click = () => {
              remove(num);
            };
            if (order.quantity <= 3) {
              return (
                <div className="item" key={num}>
                  <div className="img">
                    <img src={product.image_url} />
                  </div>
                  <div className="content">
                    <p className="title">
                      {product.irum} x {order.quantity}
                    </p>
                  </div>
                  <div className="action">
                    <p className="price">{product.price * order.quantity}원</p>
                    <button className="btn btn--link">
                      <i className="icon icon--cross" onClick={click} />
                    </button>
                  </div>
                </div>
              );
            } else if (order.quantity > 3) {
              orders.map((order) => {
                order.quantity = 3;
              });
              return (
                <div>
                  <div className="item" key={num}>
                    <div className="img">
                      <img src={product.image_url} />
                    </div>
                    <div className="content">
                      <p className="title">
                        {product.irum} x {3}
                      </p>
                    </div>
                    <div className="action">
                      <p className="price">{product.price * 3}원</p>
                      <button className="btn btn--link">
                        <i className="icon icon--cross" onClick={click} />
                      </button>
                    </div>
                  </div>
                  <div className="limit">
                    한 상품 당 3개만 구입할 수 있습니다.
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">{totalPrice}원</div>
            </div>
            <button className="btn btn--link">
              <i className="icon icon--delete" onClick={removeAll} />
            </button>
          </div>
          <button
            className="CheckoutBtn"
            style={{ width: "100%", marginTop: 10 }}
            onClick={checkOut}
          >
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Order;
