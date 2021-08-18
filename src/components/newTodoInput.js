import React, { useState } from "react";
import styles from '../styles/newInputTodo.module.css';

const NewTodo = () => (
    <div className={styles.container}>
        <input type="radio" className={styles.newTodoCheckbox}/>
        <input type="text" className={styles.newTodoInput} placeholder="Create a new todo..." />
    </div>
)

export default NewTodo;