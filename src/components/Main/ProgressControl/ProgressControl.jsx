import { ReactComponent as LeftArrow } from "../../../assets/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/icons/arrow-right.svg";
import styles from "./ProgressControl.module.css";
import StepBtn1 from "./StepBtn1";
import StepBtn2 from "./StepBtn2";
import StepBtn3 from "./StepBtn3";

export default function ProgressControl({
  currentPhase,
  onNextClick,
  onPrevClick,
}) {
  // 根據當前階段返回對應的內容
  function renderStepBtn() {
    switch (currentPhase) {
      case "step1":
        return <StepBtn1 onNextClick={onNextClick} />;
      case "step2":
        return <StepBtn2 onNextClick={onNextClick} onPrevClick={onPrevClick} />;
      case "step3":
        return <StepBtn3 onPrevClick={onPrevClick} />;
      default:
        return null;
    }
  }

  return (
    <section class={styles.progressControlContainer}>
      {renderStepBtn()} {/* 根據階段渲染內容 */}
    </section>
  );
}
