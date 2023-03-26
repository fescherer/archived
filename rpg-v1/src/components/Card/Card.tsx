import React from 'react';
import styles from './card.module.css';


export function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>Titulo</span>
                <button>+</button>
            </div>
            <div className={styles.informations}>
                <label>
                    <span>Custo: </span>
                    <input type="text" name="maxRadiation" id="maxRadiation" size={100}></input>
                </label>
            </div>
            
        </div>
    )
}
