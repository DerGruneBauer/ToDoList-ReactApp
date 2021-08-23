import React from "react";
import styles from "../styles/todoIndividual.module.css";
import deleteIcon from "../images/icon-cross.svg";

const IndividualTodo = (props) => {

  const onComplete = e => {
    if(props.isCompleted) {
      e.target.classList.remove(styles.uncompletedCheckbox);
      e.target.classList.add(styles.completedCheckbox);
    } else {
      e.target.classList.remove(styles.completedCheckbox);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkboxAndName}>
        <div
          onClick={(e) => {
            onComplete(e); props.onCompleteTask(props.id);
          }}
          className={`${styles.newTodoCheckbox} ${styles.uncompletedCheckbox}`}
        />
        <div className={styles.taskName}>{props.taskName}</div>
      </div>
      <div
        onClick={() => props.onDeleteClick(props.id)}
        style={{ backgroundImage: `url(${deleteIcon})` }}
        className={styles.deleteButton}
      ></div>
    </div>
  );
};
export default IndividualTodo;
