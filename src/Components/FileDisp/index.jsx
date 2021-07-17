import React, { useEffect } from 'react';
import "./style.css";

// Individual File Design (icon + text)
export default function FileDisp(props) {
    
    // Script for using ion icons
    useEffect(() => {
        const script = document.createElement('script');
        script.type="module";
        script.src = "https://unpkg.com/ionicons@5.4.0/dist/ionicons.js";
        document.body.appendChild(script);
    })
    return (
        <div className="file-details">
            <ion-icon name={`logo-${props.iconName}`} style={{'color':props.iconColor}}></ion-icon>
            {props.fileName}
        </div>
    );
}