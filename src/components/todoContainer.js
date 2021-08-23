import React, { useState } from "react";
import styles from '../styles/todoContainer.module.css'
import ChangeView from "./changeView";
import Header from './header';
import ListTodo from "./listTodos";
import NewTodo from "./newTodoInput";

const TodoContainer = (props) => {

    const[tasks, setTasks] = useState([]);
    const[visibleTasks, setVisibleTasks] = useState([]);

    const deleteTask = id => {
        const index = tasks.findIndex(x => x.id === id);
        index > -1 ? setTasks(tasks.filter(task => id !== task.id)) : console.log("invalid index");
        setVisibleTasks(tasks.filter(task => id !== task.id));
    }

    const updateTask = id => {
        const updatedTasks = tasks.map(task => {
            if (id === task.id){
                return {...task, isCompleted: !task.isCompleted}
            }
            return task;
        });

        setTasks(updatedTasks);
        // setVisibleTasks(updatedTasks);
    }

    const clearCompletedTasks = () => {
        const updatedTasks = tasks.filter(task => !task.isCompleted);
        setTasks(updatedTasks);
    }

    const showCompletedTasks = () => {
        // const completedTasks = tasks.filter(task => task.isCompleted);
        // setTasks(completedTasks);
        setVisibleTasks(tasks.filter(task => task.isCompleted));
        
        
    }

    const showActiveTasks = () => {
        // const activeTasks = tasks.filter(task => !task.isCompleted);
        setVisibleTasks(tasks.filter(task => !task.isCompleted));
        // setTasks(activeTasks);
    }

    const showAllTasks = () => {
        setVisibleTasks(tasks);
    }

    const addNewTask = e => {
        let taskName = e.target.value;
        let id = tasks.length === 0 ? 0 : tasks.reduce((max, x) => x.id > max ? x.id : max, tasks[0].id)+1;
        let newTask = {id: id, taskName: taskName, isCompleted: false};
        setTasks([...tasks, newTask]);
        setVisibleTasks([...tasks, newTask]);
        console.log(newTask);
        e.target.value="";

    }

    const handleKeyPress = e => {
        if(e.keyCode === 13){
            addNewTask(e);
        }
    }

    return (
    <div className={styles.container}>
        <Header toggleTheme={props.toggleTheme} />
        <NewTodo onKeyPress={handleKeyPress} />
        <ListTodo onClearClick={clearCompletedTasks} onCompleteTask={updateTask} onDeleteClick={deleteTask} taskList={visibleTasks}/>
        <ChangeView onActiveClick={showActiveTasks} onCompletedClick={showCompletedTasks} onAllClick={showAllTasks}/>
    </div>
    );
}

export default TodoContainer;