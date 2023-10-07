import "./progressiveBar.scss";
import Step from "./Step";
const ProgressiveBar = ({ steps, currentStep }) => {
  const style = (i) => {
    if (i < currentStep) {
      return "prev";
    } else if (i === currentStep) {
      return "current";
    } else {
      return "next";
    }
  };

  return (
    <div className="container">
      {steps.map((step, index) => (
        <Step
          key={index}
          style={style(index)}
          title={step}
          index={index}
          last={index === steps.length - 1 ? "last" : null}
        />
      ))}
    </div>
  );
};

export default ProgressiveBar;
