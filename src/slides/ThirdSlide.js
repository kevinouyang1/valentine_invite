import React, { useEffect, useState } from 'react';
import '../App.css';
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProgressBar from '../component/ProgressBar';
import { getProgess, setProgressThree } from '../helper/LocalStorage';



function ThirdSlide () {
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
    })

    return (<div className="element-display">
        <ProgressBar />
        <div className="row" id="center-it">
            <img src="./assets/love1.png" alt="love" id="image-two"/>
            <img src="./assets/love2.png" alt="love" id="image-two"/>
            <img src="./assets/love3.png" alt="love" id="image-two"/>
            <img src="./assets/love4.png" alt="love" id="image-two"/>
        </div>
        <Typography> we've had so many fun times ^^^^^^</Typography>
        <Typography> {"if you say yes u will continue having knee slapping enjoyment ;)"}</Typography>
        <Typography> {sadFaces} </Typography>
        <div className="row" id="center-it">
            <Button sx={{
                border:"2px solid #1976d2",
                height: "75px",
                width: "275px",
                marginRight: "25px",
            }} onClick={() => {
                setProgressThree("done");
                navigate("/we-are-in-love");
            }}> {"i can't wait to find out what's in store <3"}</Button>
            <Button sx={{
                border:"2px solid #1976d2",
                height: "75px",
                width: "275px",
            }} onClick={handleSadFaces}> ure not even that good at planning wtf</Button>
        </div>
    </div>)
}

export default ThirdSlide