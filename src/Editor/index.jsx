import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import { Container, Grid } from '@material-ui/core';
import './style.css';
import './prism.css';

export default function Editor(props) {

    const [code, setCode] = useState("");
    const [tabLength, setTabLength] = useState("    ");

    useEffect(() => {
        Prism.highlightAll();
    }, [props.lang, code]);

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <textarea
                        onChange={e => { setCode(e.target.value)}}
                        value={code}
                    />
                </Grid>
                <Grid item xs={6}>
                    <pre>
                        <code className={`language-${props.lang}`}>{code}</code>
                    </pre>
                </Grid>
            </Grid>
        </Container>
    );
}