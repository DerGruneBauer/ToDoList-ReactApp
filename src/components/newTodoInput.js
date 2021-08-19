import React from "react";
import styles from '../styles/newInputTodo.module.css';

const NewTodo = (props) => (
    <div className={styles.container}>
        <input type="radio" className={styles.newTodoCheckbox}/>
        <input onKeyUp={props.onKeyPress} type="text" className={styles.newTodoInput} placeholder="Create a new todo..." />
    </div>
)

export default NewTodo;