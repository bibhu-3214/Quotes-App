import React from "react";
import QuotesContainer from "./components/QuotesContainer";
const App = (props) => {
  return (
    <div className="container-fluid">
      <h1 className="display-3 text-center mb-4">QuotesBook</h1>
      <div>
        <QuotesContainer />
      </div>
    </div>
  );
};

export default App;
