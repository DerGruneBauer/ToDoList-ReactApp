import React from "react";
import styles from '../styles/header.module.css';

const Header = (props) => {

    const toggleIcon = (e) => {
        let target = e.target.classList;
        if(target.contains(`${styles.sunIcon}`)) {
            target.remove(`${styles.sunIcon}`)
            target.add(`${styles.moonIcon}`);
        } else {
            target.remove(`${styles.moonIcon}`)
            target.add(`${styles.sunIcon}`);
        }
    }

    return (
    <div className={styles.header}>
        <h1>TODO</h1>
        <div 
        className={`${styles.moonIcon} ${styles.toggleIcon}`}
        onClick={(e) => {toggleIcon(e); props.toggleTheme(e)}}
        ></div>
    </div>
);
}
export default Header;