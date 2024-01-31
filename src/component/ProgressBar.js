import React, { useEffect, useState } from "react";
import { getProgess } from "../helper/LocalStorage";
import "../App.css";


function ProgressBar() {
    const [ progress, setProgress ] = useState(0);

    useEffect(() => {
        const progress = getProgess();
        let complete = 0;
        if (progress['intro'] === "done") {
            complete ++;
        }
        if (progress['first'] === "done") {
            complete ++;
        }
        if (progress['second'] === "done") {
            complete ++;
        }
        if (progress['third'] === "done") {
            complete ++;
        }
        setProgress(complete);
    }, [])

    const renderProgressImages = () => {
        const progressImages = [];
    
        for (let i = 1; i <= progress; i++) {
          progressImages.push(<img src={`./assets/heart.png`} alt={`Step ${i}`} key={i} id="heart"/>);
        }
    
        return progressImages;
    };

    return (
        <div className="row" id="center-it">
            {renderProgressImages()}
            {progress}/4
        </div>
    )

}

export default ProgressBar;