import React from "react";
import styles from "./EmployeeCard.module.scss";

const EmployeeCard = (props) => {
  const { name, role, id } = props.team;
  return (
    <div className={styles.cardContainer}>
      <h1>Name: {name}</h1>
      <h2>Role: {role}</h2>
    </div>
  );
};

export default EmployeeCard;
