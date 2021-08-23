import React from "react";
import styles from "../styles/todoIndividual.module.css";
import deleteIcon from "../images/icon-cross.svg";

const IndividualTodo = (props) => {

  const onComplete = (e) => {
    let target = e.target.classList;
    if(!props.isCompleted) {
      target.remove(styles.uncompletedCheckbox);
      target.add(styles.completedCheckbox);
    } else {
      target.remove(styles.completedCheckbox);
    }
  }
  
  const styleCheckbox = props.isCompleted ? styles.completedCheckbox : styles.uncompletedCheckbox;

  return (
    <div className={styles.container}>
      <div className={styles.checkboxAndName}>
        <div
          onClick={(e) => {
            onComplete(e); props.onCompleteTask(props.id);
          }}
          draggable="true"
          className={`${styles.newTodoCheckbox} ${styleCheckbox}`}
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
