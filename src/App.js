import { useState } from "react";
import "./styles.css";
import ProgrressiveBar from "./component/progressivebar/ProgressiveBar";
import Controller from "./component/cotroller/Controller";

const steps = ["address", "shipping", "thanks"];
export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className="App">
      <h1>Progressive Bar demo...</h1>
      <h2>Start editing to see some magic happen!</h2>
      {currentStep === steps.length - 1 && <h2>Thanks for shopping!!!</h2>}
      <ProgrressiveBar steps={steps} currentStep={currentStep} />
      <Controller
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        max={steps.length - 1}
      />
    </div>
  );
}
