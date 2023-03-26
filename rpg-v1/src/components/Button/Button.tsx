import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
    title: string,
    handleButton: () => void,
}

export function Button({ title,handleButton, ...rest } : ButtonProps) {
    return (
        <button className={styles.button} onClick={handleButton}>
            {title}
        </button>
    )
}