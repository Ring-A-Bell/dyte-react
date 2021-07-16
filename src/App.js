import React, { useState } from 'react';
import './App.css';
import Editor from './Editor';

export default function App() {

  // Hooks to store state for editor language
  const [lang, setLang] = useState("html");

  return (
    <div>
      <h1>Dyte Code Editor Sandbox</h1>
      <fieldset>
        <legend>Choose language:</legend>
        <input
          type="radio"
          id="html"
          name="language"
          value="html"
          defaultChecked="true"
          onChange={() => { setLang("html")}}
        />
        <label htmlFor="html">HTML</label>

        <input
          type="radio"
          id="css"
          name="language"
          value="css"
          onChange={() => { setLang("css")}}
        />
        <label htmlFor="css">CSS</label>

        <input
          type="radio"
          id="javascript"
          name="language"
          value="javascript"
          onChange={() => { setLang("javascript")}}
        />
        <label htmlFor="javascript">JavaScript</label>
      </fieldset>

      <Editor lang={lang}/>

    </div>
  );
}
