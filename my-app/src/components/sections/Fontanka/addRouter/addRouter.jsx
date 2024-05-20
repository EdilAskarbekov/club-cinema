import React from "react";
import photo2 from "../img/photo1.jpg"
import photo3 from "../img/photo2.jpg"
import photo4 from "../img/photo3.jpg"
import photo5 from "../img/photo4.jpg"

export default function AddRouter(){
    return(
        <div className="addMain">
            <div className="addWrap">
                <div className="addrouter">
                    <div className="photoRouter"><img src={photo2} alt="" /></div>
                    <div className="photoRouter"><img src={photo3} alt="" /></div>
                    <div className="photoRouter"><img src={photo4} alt="" /></div>
                    <div className="photoRouter"><img src={photo5} alt="" /></div>
                </div>
            </div>
        </div>
    )
}
