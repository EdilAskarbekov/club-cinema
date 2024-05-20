import React from "react";

export default function Coock({product}){
    return(
        <>
            <div className="Amet" key={product.id}>
                <div className="donec">
                    <img src={product.producr} alt="" />
                </div>
                <div className="donecTwo">
                    <div className="donecName">
                        <h2>{product.name}</h2>
                        <button>{product.summa} ₽</button>
                    </div>
                    <p style={{color: 'rgba(213, 98, 29, 1)',
                                fontFamily: "'Stolzl'",
                                fontSize: '14px',
                                top: "-5px"}}>{product.gram}гр</p>
                    <p style={{fontFamily: "'Stolzl'",
                                fontSize: '14px',
                                fontWeight: '400',
                                color: 'rgba(255, 255, 255, 1)'}}>{product.text}</p>
                </div>
            </div>
        </>
    )
}