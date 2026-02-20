import React from "react";
import Sample from "./Sample";
import ClassSample from "./ClassComponent";

function App() {
  return (
    <div>
      <h1>React Concepts Sample</h1>

      <Sample name="Mano (Functional)" />
      <hr />
      <ClassSample name="Mano (Class)" />
    </div>
  );
}

export default App;