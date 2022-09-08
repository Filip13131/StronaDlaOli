import React from "react";
import lodash from "lodash";  
import "./AnwserLine.css"
import Button from "./Button/Button";

const AnwserLine = ({setAnwser})=>{

    return(
        <div className="AnwserLine">
            {
                lodash.range(10).map((i)=>(
                    <Button anwser={i} 
                            setVirable = {setAnwser}
                                />  
                )
                )
            }
        </div>
    )
}

export default AnwserLine;