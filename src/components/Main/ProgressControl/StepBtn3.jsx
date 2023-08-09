import { ReactComponent as LeftArrow } from "../../../assets/icons/arrow-left.svg";
import styles from "./ProgressControl.module.css";

function StepBtn3({ onPrevClick }) {
  return (
    <section
      class={`${styles.buttonGroup} ${styles.buttonGroup3}`}
      data-phase="credit-card"
    >
      <button class={styles.prev} onClick={onPrevClick}>
        <LeftArrow className={styles.arrowLeft} />
        上一步
      </button>
      <button class={styles.next}>確認下單</button>
    </section>
  );
}

export default StepBtn3;
