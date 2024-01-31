import React, { useEffect, useState } from 'react';
import '../App.css';
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../component/ProgressBar';
import { getProgess, setProgressTwo } from '../helper/LocalStorage';



function SecondSlide () {
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
    })

    return (<div className="element-display">
        <ProgressBar />
        <div className="row" id="center-it">
            <img src="./assets/personality.jpeg" alt="polar" id="image"/>
        </div>
        <Typography> Even our personality types are made for each other MWEHEHEHEHEHEHEHEEHEHEHEHEHEHEHEHEHE</Typography>
        <Typography> {sadFaces} </Typography>
        <div className="row" id="center-it">
            <Button sx={{
                border:"2px solid #1976d2",
                height: "75px",
                width: "275px",
                marginRight: "25px",
            }} onClick={() => {
                setProgressTwo("done");
                navigate("/third");
            }}> we are even logically made for each other :3</Button>
            <Button sx={{
                border:"2px solid #1976d2",
                height: "75px",
                width: "275px",
            }} onClick={handleSadFaces}> NO NO NO NO IM A CHILD I DONT ACCEPT IT</Button>
        </div>
    </div>)
    }

export default SecondSlide