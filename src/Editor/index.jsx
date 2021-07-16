import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import { Container, Grid } from '@material-ui/core';
import './style.css';
import './prism.css';

export default function Editor(props) {

    const [code, setCode] = useState("");
    const [tabLength, setTabLength] = useState(0);
    const [indentLevel, setIndentLevel] = useState(4);

    useEffect(() => {
        Prism.highlightAll();
    }, [props.lang, code]);

    function handleKeyDown(e) {
        let value = code;
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
        setCode(value);
    }

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={8}>
                    <textarea className={`language-${props.lang}`}
                        onChange={(e) => {setCode(e.target.value)}}
                        value={code}
                        onKeyDown={(e) => {handleKeyDown(e)}}
                    />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <pre>
                        <code className={`language-${props.lang}`}>{code}</code>
                    </pre>
                </Grid>
            </Grid>
        </Container>
    );
}