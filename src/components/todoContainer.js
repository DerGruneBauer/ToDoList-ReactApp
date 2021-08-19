import React, { useState } from "react";
import styles from '../styles/todoContainer.module.css'
import ChangeView from "./changeView";
import Header from './header';
import ListTodo from "./listTodos";
import NewTodo from "./newTodoInput";

const TodoContainer = () => {

    const[tasks, setTasks] = useState(
        [
            {id: 0, taskName: "Walk Porter around the block", isCompleted: false},
            {id: 1, taskName: "Take out the trash", isCompleted: false},
            {id: 2, taskName: "Jog around the block three times", isCompleted: false},
        ]);

    const deleteTask = (id) => {
        const index = tasks.findIndex(x => x.id === id);
         if (index > -1){
            let updatedTaskList = tasks.filter(task => id !== task.id);
            setTasks(updatedTaskList);
         } else {
             console.log("invalid index");
         }
    }

    //'...' is called the spread operator and allows us to pass in iterable value(array etc) without having to
    //pass in each item individually. ex. (...numbers) where numbers is an array of numbers
    //BUT, one should not use the spread operator when passing props to child compoenent as it is an anti-pattern. 
    //May send unnessary props to child component and clouds which props are being sent
    const addNewTask = (e) => {
        let taskName = e.target.value;
        let id = tasks.reduce((max, x) => x.id > max ? x.id : max, tasks[0].id)+1;
        let newTask = {id: id, taskName: taskName, isCompleted: false};
        setTasks([...tasks, newTask]);

        e.target.value="";
    }

    const handleKeyPress = e => {
        if(e.keyCode === 13){
            addNewTask(e);
        }
    }

    return (
    <div className={styles.container}>
        <Header />
        <NewTodo onKeyPress={handleKeyPress} />
        <ListTodo onDeleteClick={deleteTask} taskList={tasks}/>
        <ChangeView />
    </div>
    );
}

export default TodoContainer;