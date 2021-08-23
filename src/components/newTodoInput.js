import React from "react";
import styles from "../styles/newInputTodo.module.css";

const NewTodo = (props) => (
  <div className={styles.container}>
    <div className={styles.newTodoCheckbox}></div>
    <input
      maxLength="25"
      onKeyUp={props.onKeyPress}
      type="text"
      className={styles.newTodoInput}
      placeholder="Create a new todo..."
    />
  </div>
);

export default NewTodo;
