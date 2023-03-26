import React, { ReactNode, useState } from "react";
import JSONdata from '../data.json';

/*
interface DataTypeRefatored {
    name: string,
    age: number,
    bodyType: number,
    origin: string,
    irradiated: boolean,
    currentLife: number,
    currentEnergy: number,
    currentRadiation: number,
    attributes: Array<{name: string, QNT: number}>,
    Items: Array<{name: string, description: string}>,
    exclusiveItems: string,
    abilities: Array<{name: string, damage: string, cost: string, description: string}>,
    principlesPoints: number,
    principles: Array<{name: string, consequence: string, cost: string, description: string}>
    story: string,
    anotations: string
}*/

interface DataType {
    name: string,
    age: number,
    bodyType: number,
    origin: string,
    irradiated: boolean,
    maxHealth: number,
    currentLife: number,
    maxEnergy: number,
    currentEnergy: number,
    maxRadiation: number,
    currentRadiation: number,
    attributes: Array<{name: string, QNT: number}>,
    items: string,
    exclusiveItems: string,
    abilities: string,
    principlesPoints: number,
    principles: string,
    story: string,
    anotations: string
}


interface DataFuncType {
    data: DataType,
    showHiddenContentStory: boolean,
    handleStory: () => void,
    showHiddenContentAnotations: boolean,
    handleAnotations: () => void,
    updateValues: () => void,
    loadData: (objeto : string) => void,
    attributes: Array<{name: string, QNT: number}>,
    tableID: string,
    storyID: string,
    anotationsID: string,
    randID: () => void,
    story: string,
    anotations: string
}

interface props {
    children: ReactNode
}

export const DataContext = React.createContext({} as DataFuncType);

export const DataProvider = ({ children } : props) => {

    let data = JSONdata;

    const [showHiddenContentStory, setShowHiddenContentStory] = useState(false);
    const [showHiddenContentAnotations, setShowHiddenContentAnotations] = useState(false);
    const [attributes, setAttributes] = useState(data.attributes)
    const [tableID, setTableID] = useState("123")
    const [storyID, setStoryID] = useState("13")
    const [story, setStory] = useState(data.story)
    const [anotationsID, setAnotationsID] = useState("15")
    const [anotations, setAnotations] = useState(data.anotations)

    function handleStory(){
        if(showHiddenContentStory){
            data.story = (document.getElementById("highlightTextArea") as HTMLTextAreaElement).value
            setStory(data.story)
        }
        setShowHiddenContentStory(!showHiddenContentStory)
    }

    function handleAnotations(){
        if(showHiddenContentAnotations){
            data.anotations = (document.getElementById("highlightTextArea") as HTMLTextAreaElement).value
            setAnotations(data.anotations)
        }
        setShowHiddenContentAnotations(!showHiddenContentAnotations)
    }

    function updateValues(){
        data.name = (document.getElementById("body-name") as HTMLInputElement).value;
        data.age = parseInt((document.getElementById("body-age") as HTMLInputElement).value);
        data.bodyType = parseInt((document.getElementById("body-body-type") as HTMLInputElement).value);
        updateAttributes();
        data.origin = (document.getElementById("body-origins") as HTMLSelectElement).value;

        //Converting string to boolean value
        data.irradiated = !!((document.getElementById("checkboxIrradiated") as HTMLInputElement).value);

        data.maxHealth = parseInt((document.getElementById("maxHealth") as HTMLInputElement).value);
        data.currentLife = parseInt((document.getElementById("currentHealth") as HTMLInputElement).value);
        data.maxEnergy = parseInt((document.getElementById("maxEnergy") as HTMLInputElement).value);
        data.currentEnergy = parseInt((document.getElementById("currentEnergy") as HTMLInputElement).value);
        data.maxRadiation = parseInt((document.getElementById("maxRadiation") as HTMLInputElement).value);
        data.currentRadiation = parseInt((document.getElementById("currentRadiation") as HTMLInputElement).value);

        data.exclusiveItems = (document.getElementById("exclusiveItems") as HTMLTextAreaElement).value;
        data.items = (document.getElementById("normalItems") as HTMLTextAreaElement).value;
        data.abilities = (document.getElementById("abilities") as HTMLTextAreaElement).value;
        data.principles = (document.getElementById("principles") as HTMLTextAreaElement).value;

        //story and anotations are saved when closing the button when editing them
    }

    function updateAttributes(){
        data.attributes.forEach(attributes => {
            attributes.QNT = parseInt((document.getElementById(attributes.name) as HTMLInputElement).value)
        })
    }

    function randID(){
        setStoryID(Math.random().toString());
        setAnotationsID(Math.random().toString());
    }

    function loadData(objeto : string){
        data = (JSON.parse(objeto) as DataType);

        (document.getElementById("body-name") as HTMLInputElement).value = data.name;
        (document.getElementById("body-age") as HTMLInputElement).value = `${data.age}`;
        (document.getElementById("body-body-type") as HTMLInputElement).value = `${data.bodyType}`;

        //Remount table component
        setAttributes(data.attributes);
        setTableID(Math.random().toString());

        (document.getElementById("body-origins") as HTMLSelectElement).value = data.origin;
        (document.getElementById("checkboxIrradiated") as HTMLInputElement).value = `${data.irradiated}`;
        (document.getElementById("maxHealth") as HTMLInputElement).value = `${data.maxHealth}`;
        (document.getElementById("currentHealth") as HTMLInputElement).value = `${data.currentLife}`;
        (document.getElementById("maxEnergy") as HTMLInputElement).value = `${data.maxEnergy}`;
        (document.getElementById("currentEnergy") as HTMLInputElement).value = `${data.currentEnergy}`;
        (document.getElementById("maxRadiation") as HTMLInputElement).value = `${data.maxRadiation}`;
        (document.getElementById("currentRadiation") as HTMLInputElement).value = `${data.currentRadiation}`;

        (document.getElementById("exclusiveItems") as HTMLTextAreaElement).value = data.exclusiveItems;
        (document.getElementById("normalItems") as HTMLTextAreaElement).value = data.items;
        (document.getElementById("exclusiveItems") as HTMLTextAreaElement).value = data.abilities;
        (document.getElementById("principles") as HTMLTextAreaElement).value = data.principles;
        setStory(data.story);
        setAnotations(data.anotations)
        randID()
    }

    return (
        <DataContext.Provider value={
            {
                data, 
                showHiddenContentStory,
                handleStory,
                showHiddenContentAnotations,
                handleAnotations,
                updateValues,
                loadData,
                attributes,
                tableID,
                storyID,
                anotationsID,
                randID,
                story,
                anotations
            }}>
            {children}
        </DataContext.Provider>
    )
}