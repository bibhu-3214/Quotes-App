import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function QuoteForm(props) {
  const {
    formSubmission,
    id: slNo,
    name: author,
    body: quote,
    handleToggle,
  } = props;

  const [id, setId] = useState(slNo ? slNo : uuidv4());
  const [name, setName] = useState(author ? author : "");
  const [body, setBody] = useState(quote ? quote : "");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: id,
      name: name,
      body: body,
    };
    formSubmission(formData);
    if (handleToggle) {
      handleToggle();
    }
    setId(uuidv4());
    setName("");
    setBody("");
  };

  return (
    <div className="form-floating">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <br />
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control shadow bg-body rounded"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <label htmlFor="">Title</label>
        <br />
        <div className="input-group mb-2">
          <textarea
            className="form-control shadow bg-body rounded"
            value={body}
            onChange={handleBodyChange}
          ></textarea>
        </div>
        <input
          className="btn btn-primary shadow rounded"
          type="submit"
          value="save"
        />
      </form>
    </div>
  );
}

export default QuoteForm;
