import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import { Container, Grid } from '@material-ui/core';
import './style.css';
import './prism.css';

export default function Editor(props) {

    const [tabLength, setTabLength] = useState(0);
    const [indentLevel, setIndentLevel] = useState(4);

    useEffect(() => {
        Prism.highlightAll();
        const json = JSON.stringify(props.code);
        localStorage.setItem(`${props.fileName}`, json);
    }, [props.lang, props.fileName, props.code]); 

    function handleKeyDown(e) {
        let value = props.code;
        if(e.key==="Tab" && !e.shiftKey) {
            e.preventDefault();
            setTabLength(tabLength+1);
            for(var i=0;i<indentLevel;i++)
                value += " ";
            console.log(value);
        }

        else if(e.shiftKey && e.key=="Tab") {
            e.preventDefault();
            setTabLength(tabLength-1);
            value = value.substr(0,value.length-indentLevel);
            console.log(value);
        }
        
        if(e.key=="Enter") {
            e.preventDefault();
            value += "\n";
            for(var i=1;i<=tabLength*indentLevel;i++)
                value += " ";
            console.log(value);
        }
        props.setCode(value);
    }

    return (
        <Container>
            <Grid container spacing={3} className="code-container">
                <Grid item xs={12} lg={8} className="code-input">
                    <textarea className={`language-${props.lang}`}
                        onChange={(e) => {props.setCode(e.target.value)}}
                        value={props.code}
                        onKeyDown={(e) => {handleKeyDown(e)}}
                    />
                </Grid>
                <Grid item xs={12} lg={8} className="code-output">
                    <pre>
                        <code className={`language-${props.lang}`}>{props.code}</code>
                    </pre>
                </Grid>
            </Grid>
        </Container>
    );
}