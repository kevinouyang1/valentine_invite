import React, { useEffect, useState } from 'react';
import '../App.css';
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../component/ProgressBar';
import { getProgess } from '../helper/LocalStorage';
import { sendMessage } from '../helper/Twilioliolio';


function Love () {
    const navigate = useNavigate();
    const [sadFaces, setSadFaces] = useState("");
    const [numberSad, setNumberSad] = useState(0);


    const handleSadFaces = () => {
        if (numberSad >= 50) {
            setSadFaces("YOU DONT LOVE ME YOU HAVE TO");
        } else {
            setNumberSad(numberSad + 1);
            setSadFaces(sadFaces + ":(");
        }
    }

    useEffect(() => {
        const progress = getProgess();

        if (progress["intro"] !== "done") {
            navigate("/");
        }
        if (progress["first"] !== "done") {
            navigate("/first");
        }
        if (progress["second"] !== "done") {
            navigate("/second");
        }
        if (progress["third"] !== "done") {
            navigate("/third");
        }
    })
    return (<div className="element-display">
        <ProgressBar />
        <Typography> Love has been confirmed. ^</Typography>
        <div className="row" id="center-it">
            <img src="./assets/minion.gif" alt="love" id="image-two"/>
        </div>
        <Typography> {"now please reserve your valentine day kelley my bubby wubby <3"}</Typography>
        <Typography> {sadFaces} </Typography>
        <div className="row" id="center-it">
            <Button sx={{
                border:"2px solid #1976d2",
                height: "75px",
                width: "275px",
                marginRight: "25px",
            }} onClick={() => {
                sendMessage();
            }}> {"RESERVE IT FOR ME NOW PLEASE"}</Button>
            <Button sx={{
                border:"2px solid #1976d2",
                height: "75px",
                width: "275px",
            }} onClick={handleSadFaces}> .......boring i hate love.........</Button>
        </div>
    </div>)
}

export default Love