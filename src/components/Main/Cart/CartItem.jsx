import { itemData } from "./itemData.js";
import styles from "./Cart.module.css";
import { ReactComponent as BtnPlus } from "../../../assets/icons/plus.svg";
import { ReactComponent as BtnMinus } from "../../../assets/icons/minus.svg";
import { useState } from "react";

function Item({ id, name, price, image, quantity, onIncrease, onDecrease }) {
  return (
    <div
      className={styles.productContainer}
      id={id}
      data-count="0"
      data-price={price}
    >
      <img className={styles.imgContainer} alt={name} src={image} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <BtnPlus
              className={styles.productAction}
              onClick={() => onIncrease(id)}
            />
            <span className={styles.productCount}>{quantity}</span>
            <BtnMinus
              className={styles.productAction}
              onClick={() => onDecrease(id)}
            />
          </div>
        </div>
        <div className={styles.price}>$ {price}</div>
      </div>
    </div>
  );
}

function CartItem({ cartPrice, setCartPrice, shippingFee, setShippingFee }) {
  const [cartItems, setCartItems] = useState(itemData);

  let initTotalAmount = 0;
  cartItems.forEach((items) => {
    initTotalAmount += items.price * items.quantity;
  });
  setCartPrice(initTotalAmount);
  initTotalAmount >= 1000 ? setShippingFee("Free") : setShippingFee(120);

  function updateCartPrice() {
    let nextTotalAmount = 0;
    cartItems.forEach((items) => {
      nextTotalAmount += items.price * items.quantity;
    });
    setCartPrice(nextTotalAmount);
    initTotalAmount >= 1000 ? setShippingFee("Free") : setShippingFee(120);
  }

  function handleIncrease(id) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    updateCartPrice();
    initTotalAmount >= 1000 ? setShippingFee("Free") : setShippingFee(120);
  }

  function handleDecrease(id) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
    updateCartPrice();
  }

  return (
    <div className={styles.productList} data-count="0" data-price="3999">
      {cartItems.map((item) => {
        return (
          <Item
            key={item.id} // 唯一值
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        );
      })}
    </div>
  );
}

export default CartItem;
