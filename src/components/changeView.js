import React, { useState } from "react";
import styles from '../styles/changeView.module.css';

const ChangeView = () => (
    <div className={styles.container}>
        <div className={styles.linkContainer}>
            <div className={styles.activeLink}>All</div>
            <div>Active</div>
            <div>Completed</div>
        </div>
    </div>
)

export default ChangeView;