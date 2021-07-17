import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PasteBin from '../PasteBin';
import './style.css';

export default function LiveView(props) {

    const [renderCode, setRenderCode] = useState("");

    useEffect(() => {
        var code;

        code = (props.htmlCode).substring(0,props.htmlCode.indexOf("<html>")+6);
        code += "\n<script>\n" + props.jsCode + "\n</script>";
        code += "\n<style>\n" + props.cssCode + "\n</style>\n";
        code += props.htmlCode.substring(props.htmlCode.indexOf("<html>")+6);
        setRenderCode(code);
        console.log(code);
    })

    return (
        <div>
            <iframe srcDoc={renderCode} />
            <PasteBin code={renderCode} />
        </div>
    );
}