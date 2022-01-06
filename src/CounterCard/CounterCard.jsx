import React, { useState } from "react";
import styles from "./CounterCard.module.scss";

const CounterCard = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counterContainer}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default CounterCard;
