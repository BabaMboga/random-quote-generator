import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "./slices/quoteSlice";

const Quote = () => {
    const dispatch = useDispatch();
    const quote = useSelector((state) => state.quote)
    const status = useSelector((state) => state.status);
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
                ):null}
                {quote && status !== "loading" ? <div>{quote.content}</div> : null}
            </div>
        </div>
    )
}