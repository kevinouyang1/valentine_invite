import React, { useEffect, useState } from "react";
import '../App.css';
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setStart, startProgress } from "../helper/LocalStorage";

function Starter() {
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
        startProgress();
        setStart("none");
    })

    return <div className="element-display">
        <Typography fontSize="32px" fontWeight="bold"> Proposition to be my Valentine?</Typography>
        <Typography> {sadFaces} </Typography>
        <div className="row" id="center-it">
            <Button sx={{
                border:"2px solid #1976d2",
                height: "75px",
                width: "175px",
                marginRight: "25px",
            }} onClick={() => {
                startProgress();
                navigate("/first");
            }}>Continue</Button>
            <Button sx={{
                border:"2px solid #1976d2",
                height: "75px",
                width: "175px",
            }} onClick={handleSadFaces}>Fuck Off get away from me</Button>
        </div>
    </div>
}

export default Starter