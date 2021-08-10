import React from "react";
import QuoteForm from "./QuoteForm";

function AddQuote(props) {
  const { addItem } = props;

  const formSubmission = (formData) => {
    addItem(formData);
  };

  return (
    <div>
      <h3>My QuoteForm</h3>
      <QuoteForm formSubmission={formSubmission} />
    </div>
  );
}

export default AddQuote;
