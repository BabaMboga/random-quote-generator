import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "./slices/quoteSlice";

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quote); // Correct access to the quote in state
  const status = useSelector((state) => state.quote.status);

  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  const handleFetchQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div className="card col-lg-6 col-md-6 col-10 d-flex justify-content-center">
      <div className="heading">
        {status === "loading" ? (
          <div className="spinner-border text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
        {quote && status !== "loading" ? <div>{quote}</div> : null} {/* Display quote directly */}
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleFetchQuote}
      >
        <span>Generate Quote</span>
      </button>
    </div>
  );
};

export default Quote;
