import React, { useState } from "react";
import styles from "./CounterCard.module.scss";

const CounterCard = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counterCard}>
      <h1>TICKET COUNTER</h1>
      <div className={styles.counterContainer}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default CounterCard;
