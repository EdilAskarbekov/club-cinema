import React, { useState } from "react";

export default function Techrider(){
    const [showText, setShowText] = useState(false);
    const [buttonColor, setButtonColor] = useState('rgba(213, 98, 29, 1)');
    function showBtn(){
        setShowText(!showText);
        setButtonColor(showText ? 'rgba(213, 98, 29, 0.1)' : 'rgba(213, 98, 29, 1)');
    }
    return(
        <>
        <div className="techriderMain">
            <div className="techriderTema">
                <button>Top “Manhattan” menu</button>
                <h2>Техрайдер</h2>
            </div>
            <div className="techriderWrap">
                <div className="techriderOne">
                    <div className="techriderBtnOne">
                        <button onClick={showBtn} style={{ background: buttonColor }}>Loudspeakers</button>
                        {showText && <div className="btnTextOne">
                            <ul>
                                <li>Acoustic system BELL Top 600W x 2</li>
                                <li>Acoustic system BELL Mid 600W x 2</li>
                                <li>Acoustic system BELL Sub 1000W x 2</li>
                                <li>Front monitor Yamaha SM12V 300w x 2</li>
                                <li>Backside monitor Dynacord 500W x 2</li>
                            </ul>
                        </div>}
                    </div>
                    <div className="techriderBtnOne">
                        <button onClick={showBtn} style={{ background: buttonColor }}>Loudspeakers</button>
                        {showText && <div className="btnTextOne">
                            <ul>
                                <li>Acoustic system BELL Top 600W x 2</li>
                                <li>Acoustic system BELL Mid 600W x 2</li>
                                <li>Acoustic system BELL Sub 1000W x 2</li>
                                <li>Front monitor Yamaha SM12V 300w x 2</li>
                                <li>Backside monitor Dynacord 500W x 2</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className="techriderTwo">

                </div>
            </div>
        </div>
        </>
    )
}