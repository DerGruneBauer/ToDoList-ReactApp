import React from "react";
import styles from '../styles/changeView.module.css';

const ChangeView = (props) => {
    
    const addStyle = e => {
        let links = document.querySelectorAll('.link') 
        for(let i = 0; i < links.length; i++) {
            let link = links[i].classList;
            links[i].innerText !== e.target.innerText ? link.remove(styles.activeLink) : link.add(styles.activeLink);
        }
    }

    return (
    <div className={styles.container}>
        <div className={styles.linkContainer}>
            <div onClick={(e) => {props.onAllClick(); addStyle(e); }} className={`link ${styles.activeLink}`}>All</div>
            <div onClick={(e) => {props.onActiveClick(); addStyle(e); }} className={`link`}>Active</div>
            <div onClick={(e) => {props.onCompletedClick(); addStyle(e); }} className={`link`}>Completed</div>
        </div>
    </div>
    );
}

export default ChangeView;