import React, { useState } from 'react';
import FileDisp from '../Components/FileDisp';

export default function FilePane(props) {

    return (
        <div className="pane-content">
            <div onClick={() => {props.setFile("index.js")}}>
                <FileDisp iconName={"javascript"} iconColor={"yellow"} fileName={"index.js"}/>
            </div>
            <div onClick={() => {props.setFile("index.css")}}>
                <FileDisp iconName={"css3"} iconColor={"green"} fileName={"index.css"}/>
            </div>
            <div onClick={() => {props.setFile("index.html")}}>
                <FileDisp iconName={"html5"} iconColor={"red"} fileName={"index.html"}/>
            </div>
        </div>
    );
}