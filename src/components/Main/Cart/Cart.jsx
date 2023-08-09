import styles from "./Cart.module.css";
import CartItem from "./CartItem.jsx";
import { useState } from "react";

function Cart() {
  const [cartPrice, setCartPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section class={styles.productList}>
        {/* 將 shippingFee 和 cartPrice 透過 props 傳遞給 CartItem 元件 */}
        <CartItem
          cartPrice={cartPrice}
          setCartPrice={setCartPrice}
          shippingFee={shippingFee}
          setShippingFee={setShippingFee}
        />
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>{shippingFee}</div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${cartPrice}</div>
      </section>
    </section>
  );
}

export default Cart;
