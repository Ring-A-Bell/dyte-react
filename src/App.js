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
    <div>
      <h1>Dyte Code Editor Sandbox</h1>
      <Grid container spacing={3} md={8} style={{alignItems:""}}>
        <Grid item xs={12} md={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Language</FormLabel>
            <RadioGroup value={lang} row>
              <FormControlLabel value="html" control={<Radio />} label="HTML" onChange={() => setLang("html")}/>
              <FormControlLabel value="css" control={<Radio />} label="CSS" onChange={() => setLang("css")}/>
              <FormControlLabel value="javascript" control={<Radio />} label="JS" onChange={() => setLang("javascript")}/>
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={6} md={8}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Indent</FormLabel>
            <TextField value={indentation} select>
              <MenuItem value={2} onSelect={() => setIndentation(2)}>2</MenuItem>
              <MenuItem value={4} onChange={() => setIndentation(4)}>4</MenuItem>
              <MenuItem value={8} onChange={() => setIndentation(8)}>8</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
      </Grid>

      
      <FilePane setFile={setFile}/>
      <LiveView htmlCode={htmlCode} jsCode={jsCode} cssCode={cssCode}/>

    </div>
  );
}
