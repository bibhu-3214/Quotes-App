import React, { useState, useEffect } from "react";
import QuotesList from "./QuotesList";
import AddQuote from "./AddQuote";

const QuotesContainer = () => {
  const [quotes, setquotes] = useState([]);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("quotes")) || [];
    setquotes(res);
  }, []);

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [quotes]);

  const addItem = (quote) => {
    const result = [quote, ...quotes];
    setquotes(result);
  };

  const removeItem = (id) => {
    const remove = quotes.filter((quote) => {
      return quote.id !== id;
    });
    setquotes(remove);
  };

  const editItem = (quote) => {
    const result = quotes.map((q) => {
      if (q.id === quote.id) {
        return { ...q, ...quote };
      } else {
        return { ...q };
      }
    });
    setquotes(result);
  };

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>QuotesContainer</h4>
          </div>
          <div className="col">
            <h4>Add your Quotes</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gx-4">
          <div className="col">
            <div className="p-4 border bg-light">
              <QuotesList
                quotes={quotes}
                removeItem={removeItem}
                editItem={editItem}
              />
            </div>
          </div>
          <div className="col">
            <div className="p-4 border bg-light">
              <AddQuote addItem={addItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesContainer;
