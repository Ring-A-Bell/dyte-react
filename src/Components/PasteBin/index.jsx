import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

export default function PasteBin(props) {

    const devKey='YOURKEYHERE';



    function savePaste() {
        console.log("hi");

        const header = {
            //"X-Requested-With": "XMLHttpRequest"
            "Content-Type": "multipart/form-data"
        }
        var form = new FormData();
        form.append('api_dev_key', devKey);
        form.append('api_option', "paste");
        form.append('api_paste_code', props.code);

        axios.post("https://thingproxy.freeboard.io/fetch/https://pastebin.com/api/api_post.php",
            form
            )
        .then ((res) => {
            console.log(res);
        }, (err) => {
            console.log(err.response.data);
        });
    }

    function getPaste() {
        // To-Do, incomplete
    }

    return (
        <div style={{display:"flex", justifyContent:"space-between", marginTop:"5px"}}>
            <Button 
                onClick={() => savePaste()} 
                color="primary"
                variant="outlined">Save</Button>
            <Button 
                onClick={() => getPaste()} 
                color="secondary"
                variant="outlined">Retrieve</Button>
        </div>
    );
}