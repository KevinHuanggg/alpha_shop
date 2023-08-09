import { ReactComponent as LeftArrow } from "../../../assets/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/icons/arrow-right.svg";
import styles from "./ProgressControl.module.css";

function StepBtn2({ onNextClick, onPrevClick }) {
  return (
    <section
      class={`${styles.buttonGroup} ${styles.buttonGroup2}`}
      data-phase="shipping"
    >
      <button class={styles.prev} onClick={onPrevClick}>
        <LeftArrow className={styles.arrowLeft} />
        上一步
      </button>
      <button class={styles.next} onClick={onNextClick}>
        下一步
        <RightArrow className={styles.arrowRight} />
      </button>
    </section>
  );
}

export default StepBtn2;
