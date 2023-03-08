import React from "react";
import CartListActiveIcon from "../../../../assets/svg/CartListActiveIcon";
import CartListInActiveIcon from "../../../../assets/svg/CartListInActiveIcon";
import { decreaseCartItemQtyHandler, increaseCartItemQtyHandler } from "../../../../helper/helper";

function Cart(props) {
  const { cartItems, setcartItems, cartItemQty, setcartItemQty } = props;
  return (
    <div className="mt-3 row">
      <div className="col-12 col-md-10">
        <ul className=" list-unstyled mt-4">
          {cartItems.map((currentCartItem, index) => {
            return (
              <li className="row mb-2" key={index}>
                <div className="col-2 cursor-pointer d-flex gap-4 align-items-center ">
                  <CartListInActiveIcon />
                </div>
                <div className="col-6  d-block m-auto">
                  <div className="row d-flex align-items-center">
                    <div className="col-3 d-flex align-items-center">
                      {" "}
                      <img
                        src={currentCartItem?.image[0]?.url || ""}
                        alt=""
                        style={{ width: "1.4rem", height: "1.4rem" }}
                      />
                    </div>

                    <div className="col-3 d-flex align-items-center">
                      {currentCartItem?.name || ""}
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-center border cursor-pointer" onClick={()=>{
                      decreaseCartItemQtyHandler(
                        cartItems,
                        setcartItems,
                        currentCartItem,
                        cartItemQty,
                        setcartItemQty
                      );
                    }}>
                      -
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-center">
                      {currentCartItem.orderedQuantity || 0}
                    </div>
                    <div
                      className="col-2 d-flex align-items-center justify-content-center border cursor-pointer"
                      onClick={() => {
                        increaseCartItemQtyHandler(
                          cartItems,
                          setcartItems,
                          currentCartItem,
                          cartItemQty,
                          setcartItemQty
                        );
                      }}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="col-4 d-flex">
                  {" "}
                  <div className="cart-btn p-2 rounded-3">Order Now</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
