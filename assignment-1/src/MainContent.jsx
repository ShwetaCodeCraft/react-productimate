import React, { useState } from 'react';

function MainContent(props) {
  const [count, setCount] = useState(0);

  return (
    <main>
      <p>{props.text}</p>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </main>
  );
}

export default MainContent;
