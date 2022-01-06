import React, { useState } from "react";
import styles from "./EmployeeCard.module.scss";
import CounterCard from "../CounterCard";

const EmployeeCard = (props) => {
  const { name, role, id } = props.team;
  return (
    <div className={styles.cardContainer}>
      <h1>Name: {name}</h1>
      <h2>Role: {role}</h2>

      <CounterCard />
    </div>
  );
};

export default EmployeeCard;
