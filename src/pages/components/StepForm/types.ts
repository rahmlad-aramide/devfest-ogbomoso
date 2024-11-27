export type FormData = {
  attendeeFirstName: string;
  attendeeLastName: string;
  attendeeEmail: string;
  attendeeExperience: string;
  attendeeOrg?: string;
  attendeeLearning?: string;
  refferedBy?: string;
};

export type StepProps = {
  formData: FormData;
  updateFields: (fields: Partial<FormData>) => void;
  onNext: () => void;
};

export default StepProps;