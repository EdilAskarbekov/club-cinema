import React from "react";
import { Route, Routes } from "react-router-dom";
import { dataProduct } from "../../data/data";
import Banket from "./banket/banket";
import Amet from "./coock/Amet";
import AddRouter from "./Fontanka/addRouter/addRouter";
import Fontanka from "./Fontanka/Fontanka";
import Techrider from "./techrider/techrider";

export default function Sections(){
    return(
        <>
        <div className="sections">
            <Fontanka/>
            <Amet/>
            <Banket/>
            <Techrider/>
        </div>
        </>
    )
}