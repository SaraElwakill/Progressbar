import "./controller.scss";

const Controller = ({ currentStep, setCurrentStep, max }) => {
  const back = () => {
    if (currentStep < 1) return;
    setCurrentStep(currentStep - 1);
  };

  const next = () => {
    if (currentStep > max - 1) return;
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="Button-Container">
      <button className="btn" onClick={() => back()} disabled={currentStep < 1}>
        back
      </button>
      <button
        className="btn alt"
        onClick={() => next()}
        disabled={currentStep > max - 1}
      >
        next
      </button>
    </div>
  );
};

export default Controller;
