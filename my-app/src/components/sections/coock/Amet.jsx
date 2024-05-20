import React from "react";
import { dataProduct } from "../../../data/data";
import Coock from "./coock";
import './Amet.css'
import reate from './img/reate.png'
import left from './img/left.png'

export default function Amet(){
    return(
        <>
        <div className="AmetMain">
            <div className="AmetText">
                <button>Top “Manhattan” menu</button>
                <h2>Кухня</h2>
            </div>
            <div className="right">
                <img src={reate} alt="" />
            </div>
            <div className="AmetWrap">
                <Coock product={dataProduct[0]}/>
                <Coock product={dataProduct[1]}/>
                <Coock product={dataProduct[2]}/>
                <Coock product={dataProduct[3]}/>
                <Coock product={dataProduct[4]}/>
                <Coock product={dataProduct[5]}/>
                <Coock product={dataProduct[6]}/>
                <Coock product={dataProduct[7]}/>
            </div>
            <div className="left">
                <img src={left} alt="" />
            </div>
            <div className="AmetBtn">
                <button>все меню</button>
            </div>
        </div>
        </>
    )
}