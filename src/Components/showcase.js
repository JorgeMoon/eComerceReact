// componente de pruebas


import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
      
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button
        type="button"
        class="btn btn-success"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click!
      </button>
      <p>
        {count} {new Date().toString()}
      </p>
    </div>
  );
}