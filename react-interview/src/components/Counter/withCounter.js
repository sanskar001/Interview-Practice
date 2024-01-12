import { useState } from "react";

function withCounter(ChildComponent) {
  function NewComponent(props) {
    const [count, setCount] = useState(0);

    function incrementHandler() {
      setCount((preCount) => preCount + 1);
    }
    return (
      <ChildComponent count={count} onIncrement={incrementHandler} {...props} />
    );
  }

  return NewComponent;
}

export default withCounter;
