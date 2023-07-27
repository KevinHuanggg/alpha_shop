import styles from "./Cart.module.css";
import CartItem from "./CartItem.jsx";

function Cart() {
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section class={styles.productList}>{<CartItem />}</section>
      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>test for free</div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>$1024</div>
      </section>
    </section>
  );
}

export default Cart;
