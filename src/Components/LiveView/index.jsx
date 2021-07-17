import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PasteBin from '../PasteBin';
import './style.css';

export default function LiveView(props) {

    // State to store code to be live rendered
    const [renderCode, setRenderCode] = useState("");

    useEffect(() => {
        var code;

        code = (props.htmlCode).substring(0,props.htmlCode.indexOf("<html>")+6);
        code += "\n<script>\n" + props.jsCode + "\n</script>"; // injecting Javascript into the HTML
        code += "\n<style>\n" + props.cssCode + "\n</style>\n"; // injecting CSS into the HTML
        code += props.htmlCode.substring(props.htmlCode.indexOf("<html>")+6);

        // One single file with HTMl, JS and CSS code
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