import { Container, FormControlLabel, Grid, RadioGroup, Radio, FormControl, FormLabel, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import LiveView from './Components/LiveView';
import Editor from './Editor';
import FilePane from './FilePane';

export default function App() {

  // Hooks to store state for editor language
  const [lang, setLang] = useState("html");
  const [indentation, setIndentation] = useState(4);
  const [selectedFile, setFile] = useState("index.js");
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  useEffect(() => {
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
      return <Editor lang={"javascript"} fileName={selectedFile} code={jsCode} setCode={setJsCode}/>
      
    else if(selectedFile=="index.css")
    return <Editor lang={"css"} fileName={selectedFile} code={cssCode} setCode={setCssCode}/>
    
    else if(selectedFile=="index.html")
      return <Editor lang={"html"} fileName={selectedFile} code={htmlCode} setCode={setHtmlCode}/>
  }

  return (
    <div className="main-container">
      <Grid container spacing={3}>
        <Grid item xs={6} md={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Indent</FormLabel>
            <TextField value={indentation} select onChange={(e) => setIndentation(e.target.value)}>
              <MenuItem value={2} >2</MenuItem>
              <MenuItem value={4} >4</MenuItem>
              <MenuItem value={8} >8</MenuItem>
            </TextField>
          </FormControl>
          
        <FilePane setFile={setFile}/>
        </Grid>
        
        <Grid item xs={6} md={6}>
        </Grid>
      </Grid>

      
      
      <LiveView htmlCode={htmlCode} jsCode={jsCode} cssCode={cssCode}/>

    </div>
  );
}
