import React from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
  return (
    <div>
      <h2>ClickCounter {props.name}</h2>
      <h1>{props.count}</h1>
      <button onClick={props.onIncrement}>Increment</button>
    </div>
  );
};

const NewClickCounter = withCounter(ClickCounter);

export default NewClickCounter;
