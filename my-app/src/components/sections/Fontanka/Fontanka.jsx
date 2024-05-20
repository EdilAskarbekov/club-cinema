import React, { useState } from "react";
import './Fontanka.css'
import photo1 from "./img/photo5.jpg"
import { NavLink } from "react-router-dom";
import AddRouter from "./addRouter/addRouter";

export default function Fontanka(){
    const [isOpenButton1, setIsOpenButton1] = useState(true);
    const [isOpenButton2, setIsOpenButton2] = useState(false);
    const [isColorText, setIsColorText] = useState('rgba(213, 98, 29, 1)')
  
    const handleButtonClick1 = () => {
      setIsOpenButton1(false);
      setIsOpenButton2(true);
    };
  
    const handleButtonClick2 = () => {
      setIsOpenButton1(true);
      setIsOpenButton2(false);
    };
    return(
        <section className="sectionOne">
            <div className="fontankaWrap">
                <div className="fontankaOne">
                    <div className="fontankaMain">
                        <img src={photo1} alt="" />
                    </div>
                    <div className="fontankaText">
                        <button className="fontankaBtn">Since 1996</button>
                        <h1>True. Fontanka. <br /> Underground.</h1>
                    </div>
                </div>
                <div className="fontankaTwo">
                    <button onClick={handleButtonClick1} disabled={!isOpenButton1}>
                    {isOpenButton1 ? 'Закрыть' : <AddRouter/>}
                  </button>
                  <button onClick={handleButtonClick2} disabled={!isOpenButton2}>
                    {isOpenButton2 ? 'Закрыть' : <AddRouter/>}
                  </button>
                </div>
            </div>
        </section>
    )
}