import React, { useState } from "react";

function Sample(props) {
  const [count, setCount] = useState(0);   // State

return (
    <div>
      <h2>Hello {props.name}</h2>   {/* Props */}
    <h3>Count: {count}</h3>

    <button onClick={() => setCount(count + 1)}>
        Increase
    </button>
    </div>
);
}

export default Sample;