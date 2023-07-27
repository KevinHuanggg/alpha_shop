import { itemData } from "./itemData.js";
import styles from "./Cart.module.css";
import { ReactComponent as BtnPlus } from "../../../assets/icons/plus.svg";
import { ReactComponent as BtnMinus } from "../../../assets/icons/minus.svg";

function Item({ id, name, price, image, quantity }) {
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
            <BtnPlus className={styles.productAction} />
            <span className={styles.productCount}>{quantity}</span>
            <BtnMinus className={styles.productAction} />
          </div>
        </div>
        <div className={styles.price}>$ {price}</div>
      </div>
    </div>
  );
}

function CartItem() {
  return (
    <div className={styles.productList} data-count="0" data-price="3999">
      {itemData.map((item) => {
        return (
          <Item
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
}

export default CartItem;
