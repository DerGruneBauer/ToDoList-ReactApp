import React from "react";
import styles from "../styles/listTodos.module.css";
import IndividualTodo from "./todoIndividual";

const ListTodo = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.todoList}>
        {props.taskList.map((task) => (
          <IndividualTodo
            id={task.id}
            onDeleteClick={props.onDeleteClick}
            key={task.id}
            taskName={task.taskName}
            isCompleted={task.isCompleted}
            onCompleteTask={props.onCompleteTask}
          />
        ))}
        <div className={styles.spacer}></div>
      </div>
      <div className={styles.statsBar}>
        <div className={styles.itemsLeft}>
          {props.taskList.length} items left
        </div>
        <div onClick={props.onClearClick} className={styles.clearButton}>Clear Completed</div>
      </div>
    </div>
  );
};

export default ListTodo;
