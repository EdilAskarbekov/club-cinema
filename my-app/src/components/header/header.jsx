import React from "react";
import imageLogo from "./img/imageOne.png"
import './header.css'
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
        <header>
            <div className="headerWrap">
                <div className="logo">
                    <img src={imageLogo}/>
                </div>
                <ul className="navMenu">
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li>Меню</li>
                    <li>Афиша</li>
                    <li>Сотрудничество</li>
                    <li>Галерея</li>
                    <li>Новости</li>
                </ul>
                <div className="headerBtn">
                    <button className="navBtn">бронирование</button>
                </div>
            </div>
        </header>
        </>
    )
}