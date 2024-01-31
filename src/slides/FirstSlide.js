import { Typography } from '@mui/material';
import { Button } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProgess, setProgressOne } from '../helper/LocalStorage';
import ProgressBar from "../component/ProgressBar.js";
import '../App.css';



function FirstSlide () {
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
    })

    return (<div className="element-display">
        <ProgressBar />
        <div className="row" id="center-it">
            <img src="./assets/polarbear.png" alt="polar" id="image"/>
            <img src="./assets/otter.jpeg" alt="otter" id="image"/>
            <img src="./assets/seal.jpeg" alt="polar" id="image"/>
        </div>
        <Typography>Literally us ^^^^^^</Typography>
        <Typography>We are literally the same person in both looks and personality so we should make more of us for the good of the world</Typography>
        <Typography> {sadFaces} </Typography>
        <div className="row" id="center-it">
            <Button sx={{
                border:"2px solid #1976d2",
                height: "75px",
                width: "275px",
                marginRight: "25px",
            }} onClick={() => {
                setProgressOne("done");
                navigate("/second");
            }}>Agreed u are the long bua to my long mua</Button>
            <Button sx={{
                border:"2px solid #1976d2",
                height: "75px",
                width: "275px",
            }} onClick={handleSadFaces}>This is not true I don't want to admit to my love for you</Button>
        </div>

    </div>)
}

export default FirstSlide