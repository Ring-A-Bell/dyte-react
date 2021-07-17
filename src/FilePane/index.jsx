import React, { useState } from 'react';
import FileDisp from '../Components/FileDisp';

export default function IndexPane() {
    const [selectedFile, setFile] = useState("index.js");

    return (
        <div className="pane-content">
            <div onClick={() => {setFile("index.js");console.log(selectedFile)}}>
                <FileDisp iconName={"javascript"} iconColor={"yellow"} fileName={"index.js"}/>
            </div>
            <div onClick={() => {setFile("index.css");console.log(selectedFile)}}>
                <FileDisp iconName={"css3"} iconColor={"green"} fileName={"index.css"}/>
            </div>
            <div onClick={() => {setFile("index.html");console.log(selectedFile)}}>
                <FileDisp iconName={"html5"} iconColor={"red"} fileName={"index.html"}/>
            </div>
        </div>
    );
}