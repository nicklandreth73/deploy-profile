import React from "react";

function Quote(props) {
  const darkQuote =
    "Only in the darkness can you see the stars - Martin Luther King, Jr.";
  const lightQuote =
    "Sometimes I believe in as many as six impossible things before breakfast       ~Alice";
  return (
    <div>
      <h1 className={props.isDark ? "lightText" : "darkText"}>
        {props.isDark ? darkQuote : lightQuote}
      </h1>
    </div>
  );
}

export default Quote;
