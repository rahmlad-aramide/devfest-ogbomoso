import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FirstNameStep } from "./Steps/FirstNameStep";
import { LastNameStep } from "./Steps/LastNameStep";
import { EmailStep } from "./Steps/EmailStep";
import { ExperienceStep } from "./Steps/ExperienceStep";
import { OrganizationStep } from "./Steps/OrganizationStep";
import { InterestsStep } from "./Steps/InterestsStep";
import { FormData } from "./types";
import { RefferalCodeStep } from "./Steps/RefferalCode";
import { apiurl } from "../../config";
import { SuccessModal } from '../SuccessModal';

const INITIAL_DATA: FormData = {
  attendeeFirstName: "niyi",
  attendeeLastName: "bambwa",
  attendeeEmail: "dev@gmail.com",
  attendeeExperience: "4",
  attendeeOrg: "Moniep",
  refferedBy: "39e9b7",
  attendeeLearning: "djdjdj",
};

export function StepForm() {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  function updateFields(fields: Partial<FormData>) {
    setFormData((prev) => ({ ...prev, ...fields }));
  }

  const steps = [
    <FirstNameStep
      key="attendeeFirstName"
      {...{ formData, updateFields }}
      onNext={() => setCurrentStep(1)}
    />,
    <LastNameStep
      key="attendeeLastName"
      {...{ formData, updateFields }}
      onNext={() => setCurrentStep(2)}
    />,
    <EmailStep
      key="attendeeEmail"
      {...{ formData, updateFields }}
      onNext={() => setCurrentStep(3)}
    />,
    <ExperienceStep
      key="attendeeExperience"
      {...{ formData, updateFields }}
      onNext={() => setCurrentStep(4)}
    />,
    <RefferalCodeStep
      key="refferedBy"
      {...{ formData, updateFields }}
      onNext={() => setCurrentStep(5)}
    />,
    <OrganizationStep
      key="attendeeOrg"
      {...{ formData, updateFields }}
      onNext={() => setCurrentStep(6)}
    />,
    <InterestsStep
      loading={loading}
      key="attendeeLearning"
      {...{ formData, updateFields }}
      onNext={handleSubmit}
    />,
  ];

  function handleSubmit() {
    setLoading(true);
    // Here you would typically send the form data to your backend
    console.log(formData);
    fetch(apiurl+'/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(response => response.json())
    .then(response => {
      setLoading(false)
      setReferralCode(response.refferalCode)
      setShowSuccessModal(true)
    })
    .catch(error => {
      setLoading(false)
      alert(error)
    })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">{steps[currentStep]}</AnimatePresence>
      </div>

      <div className="p-4 border-t">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setCurrentStep((curr) => curr - 1)}
            className={`px-4 py-2 rounded-full ${
              currentStep === 0 ? "invisible" : "visible"
            }`}
          >
            Previous
          </button>
          <div className="space-x-2">
            {steps.map((_, index) => (
              <span
                key={index}
                className={`inline-block w-2 h-2 rounded-full ${
                  index === currentStep ? "bg-[#FF9800]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="w-[100px]" /> {/* Spacer for alignment */}
        </div>
      </div>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        referralCode={referralCode}
      />
    </div>
  );
}

export default StepForm;