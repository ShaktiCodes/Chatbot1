import React, { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import EmailVerification from "../components/EmailVerification";
import SetupOrganisation from "../components/SetupOrganisation";
import ChatbotIntegration from "../components/ChatbotIntegration";
import SuccessUI from "../components/SuccessUI";
import NotDetectedUI from "../components/NotDetectedUI";


const ChatbotSetup = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="setup-container">
      {step === 1 && <RegistrationForm onRegister={nextStep} />}
      {step === 2 && <EmailVerification onVerify={nextStep} />}
      {step === 3 && <SetupOrganisation onSetupComplete={nextStep} />}
      {step === 4 && <ChatbotIntegration onIntegrationComplete={nextStep} />}
      {step === 5 && <SuccessUI />}
      {step === 6 && <NotDetectedUI />}
      {step > 1 && step < 5 && (
        <button onClick={prevStep} className="back-button">
          Back
        </button>
      )}
    </div>
  );
};

export default ChatbotSetup;
