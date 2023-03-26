import React, { useRef } from 'react';
import { Button } from '../Button/Button';
import styles from './header.module.css';
import { DataContext } from '../../contexts/DataProvider';

interface jsonData {
    name: string;
    age: number;
  }

export function Header() {

  const provider = React.useContext(DataContext);
  
    function downloadObjectAsJson(exportObj : jsonData, exportName : string){
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      }

      function saveData(){
        provider.updateValues()
        downloadObjectAsJson(provider.data, `ficha-${provider.data.name}`)
      }
    
      let fileReader : FileReader;
      
    
      //source: https://dev.to/ilonacodes/frontend-shorts-how-to-read-content-from-the-file-input-in-react-1kfb
      const handleFileRead = (e : Event) => {
        const content = fileReader.result as string;
        
        provider.loadData((content)!);
      };
      
      const handleFileChosen = (file : File) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
      };

      //<input type="button" value="Add File" onClick={document.getElementById('filee')?.onchange()} />
      //<input type="file" id="filee" className={styles.input} />
      //<input type="file" id='file' className={styles.input} onChange={e => handleFileChosen(e.target.files![0])} accept='.json' />

      const inputFile = useRef(document.createElement("input")) 

      const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
        
      };

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p className={styles.logo}> 
                    What Happened <br />In That Night? 
                </p>

                <div className={styles.navbar}>
                    <p className={styles.title}>
                        Character Sheet 1.0 
                    </p>

                    <div className={styles.navbarButtons}>
                        <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={e => handleFileChosen(e.target.files![0])} accept='.json'/>
                        <Button title="Load Data" handleButton={onButtonClick}/>
                        <Button title="Save Data" handleButton={saveData}/>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}