import styles from "./Main.module.css";
import StepProgress from "./StepProgress/StepProgress.jsx";
import Step1 from "./Steps/Step1.jsx";
import Step2 from "./Steps/Step2.jsx";
import Step3 from "./Steps/Step3.jsx";
import ProgressControl from "./ProgressControl/ProgressControl.jsx";
import Cart from "./Cart/Cart.jsx";
import { useState } from "react";

function Main() {
  // 初始階段設置為 'step1'
  const [currentPhase, setCurrentPhase] = useState("step1");

  // 根據當前階段返回對應的內容
  function renderCurrentStep() {
    switch (currentPhase) {
      case "step1":
        return <Step1 />;
      case "step2":
        return <Step2 />;
      case "step3":
        return <Step3 />;
      default:
        return null;
    }
  }

  // 處理下一步按鈕點擊事件
  function handleNextClick() {
    if (currentPhase === "step1") {
      setCurrentPhase("step2");
    } else if (currentPhase === "step2") {
      setCurrentPhase("step3");
    }
    // 在這裡可以添加其他邏輯
  }

  // 處理上一步按鈕點擊事件
  function handlePrevClick() {
    if (currentPhase === "step2") {
      setCurrentPhase("step1");
    } else if (currentPhase === "step3") {
      setCurrentPhase("step2");
    }
    // 在這裡可以添加其他邏輯
  }

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
            {renderCurrentStep()} {/* 根據階段渲染內容 */}
          </section>
          <section className={styles.progressControlWrapper}>
            <ProgressControl
              currentPhase={currentPhase}
              setCurrentPhase={setCurrentPhase}
              onNextClick={handleNextClick}
              onPrevClick={handlePrevClick}
            />
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
