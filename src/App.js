import { Container, FormControlLabel, Grid, RadioGroup, Radio, FormControl, FormLabel, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import LiveView from './Components/LiveView';
import Editor from './Editor';
import FilePane from './FilePane';

export default function App() {

  // Hooks to store states
  const [indentation, setIndentation] = useState(4);
  const [selectedFile, setFile] = useState("index.js");
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  useEffect(() => {
    // Loading content from the respective file whenever it is selected
    var json = localStorage.getItem("index.js");
    var data = JSON.parse(json);
    if(data)
      setJsCode(data);
    else
      setJsCode("");

    json = localStorage.getItem("index.css");
    data = JSON.parse(json);
    if(data)
      setCssCode(data);
    else
      setCssCode("");

    json = localStorage.getItem("index.html");
    data = JSON.parse(json);
    if(data)
      setHtmlCode(data);
    else
      setHtmlCode("");
  }, []);

  function editorLang() {
    if(selectedFile=="index.js")
      return <Editor indentLevel={indentation} lang={"javascript"} fileName={selectedFile} code={jsCode} setCode={setJsCode}/>
      
    else if(selectedFile=="index.css")
    return <Editor indentLevel={indentation} lang={"css"} fileName={selectedFile} code={cssCode} setCode={setCssCode}/>
    
    else if(selectedFile=="index.html")
      return <Editor indentLevel={indentation} lang={"html"} fileName={selectedFile} code={htmlCode} setCode={setHtmlCode}/>
  }

  return (
    <div className="main-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className="indent-check">
          <FormControl component="fieldset">
            <FormLabel component="legend">Indent Level</FormLabel>
            <RadioGroup aria-label="indentation" name="indent" value={indentation} onChange={(e) => setIndentation(e.target.value)} row>
              <FormControlLabel value="2" control={<Radio />} label="Two" />
              <FormControlLabel value="4" checked={indentation==4} control={<Radio />} label="Four" />
              <FormControlLabel value="8" control={<Radio />} label="Eight" />
            </RadioGroup>
          </FormControl>
          </div>
          
        <FilePane setFile={setFile}/>
        <div>
          {editorLang()}
        </div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <LiveView htmlCode={htmlCode} jsCode={jsCode} cssCode={cssCode}/>
        </Grid>
      </Grid>
    </div>
  );
}
