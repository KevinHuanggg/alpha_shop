import { ReactComponent as RightArrow } from "../../../assets/icons/arrow-right.svg";
import styles from "./ProgressControl.module.css";

function StepBtn1({ onNextClick }) {
  return (
    <section
      class={`${styles.buttonGroup} ${styles.buttonGroup1}`}
      data-phase="address"
    >
      <button class={styles.next} onClick={onNextClick}>
        下一步
        <RightArrow className={styles.arrowRight} />
      </button>
    </section>
  );
}

export default StepBtn1;
