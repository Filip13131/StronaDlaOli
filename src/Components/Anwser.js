import React from "react";
import "./Anwser.css"

const Anwser = (result)=>{
    return(
        <div className="Anwser">
            {result.result}
        </div>
    )
}

export default Anwser;