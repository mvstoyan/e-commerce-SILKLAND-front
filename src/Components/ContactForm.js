import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mvolawqr"); // Initialize the form state and submit handler
  if (state.succeeded) {
    return <p>Thanks for joining!</p>; // Display a success message if the form submission succeeded
  }
  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mvolawqr"
      method="POST"
      className="line"
    >
      <button className="footerLink inputPlace">
        <i>|</i>
        <input
          className="footerInput"
          placeholder="e-mail"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />{" "}
        {/* Display validation errors if any */}
      </button>
      <button
        className="footerBtn"
        type="submit"
        aria-label="Submit Form"
        disabled={state.submitting}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>
      </button>
    </form>
  );
}
export default ContactForm;
