import styles from "./StepProgress.module.css";
import pgComplete from "../../../assets/icons/pg-complete.svg";

function Progress({ dataPhase, textValue, labelValue }) {
  return (
    <span className={styles.progressGroup} data-phase={dataPhase}>
      <span className={styles.progressIcon}>
        <div className={styles.circleContainer}>
          <span className={styles.text}>{textValue}</span>
        </div>
        <img className={styles.pgComplete} src={pgComplete} alt="pgComplete" />
      </span>
      <span className={styles.progressLabel}>{labelValue}</span>
    </span>
  );
}

export default function StepProgress() {
  return (
    <>
      {/* register-title */}
      <h2 className={styles.registerTitle}>結帳</h2>
      {/* register-progress */}
      <section className={styles.progressContainer}>
        <Progress dataPhase="address" textValue="1" labelValue="寄送地址" />
        <span className={styles.progressBar} data-order={1} />
        <Progress dataPhase="shipping" textValue="2" labelValue="運送方式" />
        <span className={styles.progressBar} data-order={2} />
        <Progress dataPhase="credit-card" textValue="3" labelValue="付款資訊" />
      </section>
    </>
  );
}