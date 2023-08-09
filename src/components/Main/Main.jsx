import styles from "./Main.module.css";
import StepProgress from "./StepProgress/StepProgress.jsx";
import Step1 from "./Steps/Step1.jsx";
import Step2 from "./Steps/Step2.jsx";
import Step3 from "./Steps/Step3.jsx";
import ProgressControl from "./ProgressControl/ProgressControl.jsx";
import Cart from "./Cart/Cart.jsx";

function Main() {
  return (
    /* main */
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <div className={styles.left}>
          {/* register */}
          <section className={styles.registerContainer}>
            <StepProgress />
          </section>
          <section className={styles.formContainer}>
            <Step1 />
            <Step2 />
            <Step3 />
          </section>
          <section className={styles.progressControlWrapper}>
            <ProgressControl />
          </section>
        </div>
        <div className={styles.right}>
          <section className={styles.cartContainer}>
            <Cart />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Main;
