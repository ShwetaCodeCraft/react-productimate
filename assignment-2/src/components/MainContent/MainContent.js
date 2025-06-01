import React, { useState } from 'react';
import styles from './MainContent.module.css';
import Button from '../Button/Button';

function MainContent({ text }) {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.main}>
      <p>{text}</p>
      <p>Count: {count}</p>
      <Button primary onClick={() => setCount(count + 1)}>Primary Increment</Button>
      <Button onClick={() => setCount(count + 1)}>Secondary Increment</Button>
    </main>
  );
}

export default MainContent;
