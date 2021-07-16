import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import './style.css';

export default function Editor(props) {

    return (
        <Container fixed className="editor-ctr">
            ads
            {props.lang}
        </Container>
    );
}