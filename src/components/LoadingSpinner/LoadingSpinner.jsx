import React from 'react';
import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Завантаження...</p>
        </div>
    );
};

export default LoadingSpinner;
