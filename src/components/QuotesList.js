import React from "react";
import QuotesItem from "./QuotesItem";

function QuotesList(props) {
  const { quotes, removeItem, editItem } = props;
  return (
    <div>
      {quotes.length === 0 ? (
        <div>
          <h4>No Quotes found...</h4>
          <h5>Add your first quotes !</h5>
        </div>
      ) : (
        <div>
          <div>
            <h3>My Quotes ({quotes.length})</h3>
          </div>
          <div>
            {quotes.map((quote) => {
              return (
                <QuotesItem
                  key={quote.id}
                  {...quote}
                  removeItem={removeItem}
                  editItem={editItem}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuotesList;
