/*const Confession: React.FC = () => (
  <section className="content">
    <h2 className="subtitle">Confess here</h2>
    <p>You will feel much better when you have got it off your chest</p>
  </section>
);

export default Confession;*/
import React, { useState, useEffect } from "react";

import ReasonDropdown from "./ReasonDropdownBox";

import { MisdemeanourKind, JustTalk } from "./types/misdemeanours.types";

type FormValues = {
  subject: string;
  reason: MisdemeanourKind | JustTalk;
  details: string;
};

const ConfessionForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    subject: "",
    reason: "just-talk",
    details: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit form data
  };

  const handleInputChange = (
    name: string,
    value: string | MisdemeanourKind
  ) => {
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    // Check if all form inputs are valid
    const isSubjectValid = formValues.subject.length > 0;
    const isDetailsValid = formValues.details.length > 10;

    setIsFormValid(isSubjectValid && isDetailsValid);
  }, [formValues]);

  return (
    <form onSubmit={handleSubmit}>
      <ReasonDropdown
        value={formValues.reason}
        onChange={(value) => handleInputChange("reason", value)}
      />

      <button type="submit" disabled={!isFormValid}>
        Confess
      </button>
    </form>
  );
};

export default ConfessionForm;
