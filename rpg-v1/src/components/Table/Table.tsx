import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataProvider';
import styles from './table.module.css';

//interface attributeData{
//    attributes: Array<{name: string, QNT: number}>
//}


export function Table() {
    //{ attributesDefault }: attributeData
    //body - attributesDefault={provider.data.attributes}
    // useEffect(() => {    
    //     console.log("Mount item");
    //     return () => console.log("Unmount item");
    // }, [])

    const { attributes } = useContext(DataContext);

    return(

        <div className={styles.tableContainer}>
        <table className={styles.tableAttributes}>
            <tbody>
            <tr>
                <th>Atributo</th>
                <th className={styles.small}>QNT</th>
            </tr>
            {attributes.map(attributes => <tr key={attributes.name.toString()}><td>{attributes.name}</td><td>
            <input 
            id={attributes.name}
            name={attributes.name}
            type="text" 
            pattern="\d*" 
            maxLength={2} 
            size={2} 
            defaultValue={attributes.QNT} />
            </td></tr>)}
            </tbody>
        </table>
        </div>
    )
}