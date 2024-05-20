import React from "react";
import photoOne from "./img/photoOne.png"
import './banket.css'

export default function Banket(){
    return(
        <>
        <div className="banketMain">
            <div className="banketWrap">
                <div className="banretOne">
                    <button className="banketBtn">Top “Manhattan” menu</button>
                    <h2>Банкеты</h2>
                    <p>Quam massa pretium et venenatis. Fringilla sagittis, 
                        arcu massa, in sem viverra consequat. Tempus sed est 
                        interdum eget nisi, nec fames. Eget amet hac varius 
                        aliquam. Mattis egestas suspendisse convallis eu 
                        arcu et aliquet. <br /><br /> Porttitor risus sociis vitae nunc 
                        id lacus eget felis. Viverra et purus nibh ut. Sed 
                        ac leo sit posuere vulputate sed morbi. Donec gravida 
                        at turpis sed pulvinar. A nibh non consectetur morbi in 
                        arcu, in pellentesque mauris. <br /><br /> Eu sodales netus faucibus 
                        interdum interdum platea massa egestas. Facilisis donec 
                        gravida pretium diam semper at id eleifend.</p>
                    <button className="podrobnee">Подробнее</button>
                </div>
                <div className="banketTwo">
                    <img src={photoOne} alt="" />
                </div>
                <div className="banketThree">
                    <button className="banketBtn">Top “Manhattan” menu</button>
                    <h2>Туристы</h2>
                    <p>Quam massa pretium et venenatis. Fringilla 
                        sagittis, arcu massa, in sem viverra consequat. Tempus 
                        sed est interdum eget nisi, nec fames. Eget amet hac varius 
                        aliquam. <br /><br /> Mattis egestas suspendisse convallis eu arcu et aliquet. 
                        Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac 
                        leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non 
                        consectetur morbi in arcu, in pellentesque mauris. <br /><br /> 
                        Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida 
                        pretium diam semper at id eleifend.</p>
                    <button className="podrobnee">Подробнее</button>
                </div>
            </div>
        </div>
        </>
    )
}