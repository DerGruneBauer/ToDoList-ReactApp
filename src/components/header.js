import React, { useState } from "react";
import styles from '../styles/header.module.css';
import moonSvg from '../images/icon-moon.svg';
import sunSvg from '../images/icon-sun.svg';

const Header = () => (
    <div className={styles.header}>
        <h1>TODO</h1>
        <div 
        className={styles.toggleIcon}
        style={{ backgroundImage: `url(${moonSvg})` }}
        ></div>
    </div>
)

export default Header;