import React from "react";
import "../css/style.css";
import { useSelector } from "react-redux";

const OrderConfirmation = () => {
  const cartData = useSelector((state) => state.myCart.cart);

  const totalAmount = cartData.reduce((total, item) => {
    return total + item.qnty * item.price;
  }, 0);

  return (
    <section className="main-section">
      <div className="cart-container">
        <div className="cart-contaienr-content">
          <div className="icon">
            <i className="fa-solid fa-check"></i>
          </div>
          <p className="paragraph-pay">Hey, Faraz Ahmed</p>
          <h2 className="heading head-paying">Your Order is Confirmed</h2>
          <p className="para-pay">
            We'll send you a shipping confirmation email as soon as your order ships
          </p>

          <h3 style={{ color: "#C0392B", margin: "10px 0" }}>
            Total Paid: ₹{totalAmount}
          </h3>

          <a href="#" className="btn-pay">
            CHECK STATUS
          </a>
          <h3 className="head-pay">THANK YOU!</h3>
          <p>Visit us again</p>
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmation;
