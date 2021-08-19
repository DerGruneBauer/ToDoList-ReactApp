import React from "react";
import styles from "../styles/todoIndividual.module.css";
import deleteIcon from "../images/icon-cross.svg";

const IndividualTodo = (props) => (
  <div className={styles.container}>
    <div className={styles.checkboxAndName}>
      <input type="radio" className={styles.newTodoCheckbox} />
      <div className={styles.taskName}>{props.taskName}</div>
    </div>
    <div
      onClick={() => props.onDeleteClick(props.id)}
      style={{ backgroundImage: `url(${deleteIcon})` }}
      className={styles.deleteButton}
    ></div>
  </div>
);

export default IndividualTodo;
