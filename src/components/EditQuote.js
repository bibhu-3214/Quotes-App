import React from "react";
import QuoteForm from "./QuoteForm";

function EditQuote(props) {
  const { id, name, body, editItem, handleToggle } = props;

  const formSubmission = (formData) => {
    editItem(formData);
  };

  return (
    <div>
      <QuoteForm
        id={id}
        name={name}
        body={body}
        formSubmission={formSubmission}
        editItem={editItem}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default EditQuote;
