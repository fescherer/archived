import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataProvider';
import styles from './textarea.module.css';
import TextareaAutosize from 'react-textarea-autosize';

interface contentData{
    type: "story" | "anotations"
}

export function TextArea({ type }: contentData){
    const provider = useContext(DataContext)

    function handleClick(){
        if(type==="story"){
            provider.handleStory()
        } else {
            provider.handleAnotations()
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.title}>{type==="story" ? "História" : "Anotações"}</span>
                    <div className={styles.textareaContainer}> 
                      <TextareaAutosize 
                      className={styles.textArea} 
                      defaultValue={type==="story" ? provider.story : provider.anotations} 
                      minRows={20} 
                      id="highlightTextArea"/>
                    </div>
                   
                </div>
                <button onClick={handleClick} className={styles.closeButton}>X</button> 
            </div>
        </div>
    )
}