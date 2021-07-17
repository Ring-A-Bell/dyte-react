import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

export default function PasteBin(props) {

    const devKey="ac8461ba3c3bbd2d0b3d1101d41bb389";



    function savePaste() {
        console.log("hi");

        const headers = {
            'Content-Type': 'application/text',
        }

        axios.post("https://pastebin.com/api/api_post.php", {
            api_dev_key: devKey,
            api_option: "paste",
            api_paste_code: props.code
        }, headers)
        .then ((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }

    function getPaste() {

    }

    return (
        <div>
            <Button 
                onClick={savePaste()} 
                color="primary"
                variant="outlined">Save</Button>
            <Button 
                onClick={getPaste()} 
                color="secondary"
                variant="outlined">Retrieve</Button>
        </div>
    );
}