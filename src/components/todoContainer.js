import React, { useState } from "react";
import styles from '../styles/todoContainer.module.css'
import Header from './header';
import ListTodo from "./listTodos";
import NewTodo from "./newTodoInput";

const TodoContainer = () => (
    <div className={styles.container}>
        <Header></Header>
        <NewTodo></NewTodo>
        <ListTodo></ListTodo>
    </div>
)

export default TodoContainer;