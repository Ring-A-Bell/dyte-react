import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import { Container, Grid } from '@material-ui/core';
import './style.css';
import './prism.css';

export default function Editor(props) {

    // How many spaces for each tab
    const [tabLength, setTabLength] = useState(0);

    useEffect(() => {
        Prism.highlightAll();

        // To store the code into the respective local storage file
        const json = JSON.stringify(props.code);
        localStorage.setItem(`${props.fileName}`, json);
    }, [props.lang, props.fileName, props.code]); 

    function handleKeyDown(e) {
        let value = props.code;

        // Increase indentation
        if(e.key==="Tab" && !e.shiftKey) {
            e.preventDefault();
            setTabLength(tabLength+1);
            for(var i=0;i<props.indentLevel;i++)
                value += " ";
            console.log(value);
        }

        // Decrease indentation
        else if(e.shiftKey && e.key=="Tab") {
            e.preventDefault();
            setTabLength(tabLength-1);
            value = value.substr(0,value.length-props.indentLevel);
            console.log(value);
        }
        
        // Next line with the same indentation
        if(e.key=="Enter") {
            e.preventDefault();
            value += "\n";
            for(var i=1;i<=tabLength*props.indentLevel;i++)
                value += " ";
            console.log(value);
        }
        props.setCode(value);
    }

    return (
        <div className="code-container">            
            <pre className="code-output">
                <code className={`language-${props.lang}`}>{props.code}</code>
            </pre>
            <textarea className="code-input"
                onChange={(e) => {props.setCode(e.target.value)}}
                value={props.code}
                onKeyDown={(e) => {handleKeyDown(e)}}
                spellCheck="false"
            />
        </div>
    );
}