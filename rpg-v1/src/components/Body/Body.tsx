import React from 'react';
import { Table } from '../Table/Table';
import { Card } from '../Card/Card';
import styles from './body.module.css';
import TextareaAutosize from 'react-textarea-autosize';
import { DataContext } from '../../contexts/DataProvider';

export function Body() {
    const provider = React.useContext(DataContext);

    return(
            <div className={styles.container}>
                
                <div className={styles.containerInital}>
                    
                        <label htmlFor="body-name" title="Escreva o nome do seu personagem">Nome: </label>
                        <input type="text" id="body-name" className={styles.inputName} defaultValue={provider.data.name}/>
                    
                    
                        <label htmlFor="body-age" title="Escreva sua idade">Idade: </label>
                        <input type="text" id="body-age" className={styles.inputAgeBodyType} size={5} defaultValue={provider.data.age}/>
                    
                    
                        <label htmlFor="body-body-type" title={
`Escreva seu tipo de corpo:
0-Corpo comum;
1-Corpo adulto
2-Corpo adulto resistente
3-Corpo adulto muito resistente
4-Monstro`}> Tipo de corpo </label>
                        <input type="text" id="body-body-type" className={styles.inputAgeBodyType} size={10} defaultValue={provider.data.bodyType}/>
                    
                    
                </div>

                <div className={styles.middleContainer}>
                    <div>
                    <Table key={provider.tableID}/>
                    </div>
                    
                    <div className={styles.sheet}>
                        <hr className={styles.horizontalLine}/>
                        
                            <div className={styles.zeroLine}>
aaa
                            </div>

                        <div className={styles.firstLine}>
                            <div className={styles.aditionalInformation}>

                                <div className={styles.dropdownOrigin}>
                                    <h5>Origem</h5>
                                    <select id="body-origins" name="body-origins" className={styles.originsOptions} defaultValue={provider.data.origin}>
                                        <option value="human">Humano</option>
                                        <option value="mole">Toupeira</option>
                                        <option value="dwarf">Anão</option>
                                        <option value="cyborg">Ciborgue</option>
                                        <option value="druid">Druida</option>
                                        <option value="elf">Elfo</option>
                                        <option value="halfElf">Meio-Elfo</option>
                                        <option value="orc">Orc</option>
                                        <option value="halfOrc">Meio-Orc</option>
                                    </select>
                                    
                                    <label htmlFor="checkboxIrradiated" className={styles.checkboxIrradiated}>
                                        <input 
                                        type="checkbox"
                                        name="checkboxIrradiated"
                                        id="checkboxIrradiated"
                                        defaultChecked={provider.data.irradiated}
                                        /><span>Irradiado?</span>
                                    </label>
                                </div>
                            </div>

                            <div className={styles.bars}>
                                <h5>Barras</h5>
                                <div style={{display:'flex',flexDirection:'row'}}>
                                    <div className={styles.barContainer}>
                                        <label htmlFor="maxHealth">
                                            <span>Vida Máxima</span>
                                            <input type="text" name="maxHealth" id="maxHealth" maxLength={5} size={5} />
                                        </label>
                                        <label htmlFor="currentHealth">
                                            <span>Vida Atual</span>
                                            <input type="text" name="currentHealth" id="currentHealth" maxLength={5} size={5} />
                                        </label>
                                    </div>
                                    <div className={styles.barContainer}>
                                        <label htmlFor="maxEnergy">
                                            <span>Energia Máxima</span>
                                            <input type="text" name="maxEnergy" id="maxEnergy" maxLength={5} size={5} />
                                        </label>
                                        <label htmlFor="currentEnergy">
                                            <span>Energia Atual</span>
                                            <input type="text" name="currentEnergy" id="currentEnergy" maxLength={5} size={5} />
                                        </label>
                                    </div>
                                    <div className={styles.barContainer}>
                                        <label htmlFor="maxRadiation">
                                            <span>Radiação Máxima</span>
                                            <input type="text" name="maxRadiation" id="maxRadiation" maxLength={5} size={5} />
                                        </label>
                                        <label htmlFor="currentRadiation">
                                            <span>Radiação Atual</span>
                                            <input type="text" name="currentRadiation" id="currentRadiation" maxLength={5} size={5} />
                                        </label>
                                    </div>
                                </div>   
                            </div>
                        </div>

                        

                        <div className={styles.secondLine}>
                            <div className={styles.cardContainer}>
                                <h5>Título</h5>
                                <div className={styles.cardsContainer}>
                                    <Card />
                                </div>
                            </div>

                            <div className={styles.containerExclusiveItems}>
                                <h5>Itens Exclusivos</h5>
                                <TextareaAutosize 
                                placeholder="Digite seus itens exclusivos" 
                                minRows={10} 
                                maxRows={30} 
                                className={styles.textarea}
                                id="exclusiveItems"/>
                            </div>

                            <div className={styles.containerItems}>
                                <h5>Itens</h5>
                                <TextareaAutosize 
                                placeholder="Digite seus itens" 
                                minRows={10} 
                                maxRows={30} 
                                className={styles.textarea}
                                id="normalItems"/>
                            </div>
                        </div>

                        <div className={styles.thirdLine}>
                            <div className={styles.abilities}>
                                <h5>Habilidades</h5>
                                <TextareaAutosize 
                                placeholder="Digite suas habilidades" 
                                minRows={10} 
                                maxRows={30} 
                                className={styles.textarea}
                                id="abilities"/>
                                
                            </div>
                            <div className={styles.principles}>
                                <h5>Principios</h5>
                                <TextareaAutosize 
                                placeholder="Digite seus principios" 
                                minRows={10} 
                                maxRows={30} 
                                className={styles.textarea}
                                id="principles"/>
                            </div>
                        </div>

                        <div className={styles.forthLine}>
                            <button onClick={provider.handleStory} className={styles.buttonTextArea}>História do Personagem</button>
                            <button onClick={provider.handleAnotations} className={styles.buttonTextArea}>Anotações</button>
                        </div>
                    </div>
                    
                    
                    

                </div>
               
            </div>
    )
}