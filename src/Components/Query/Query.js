 
import "./Query.css"
import React from "react";

import Question from "./Question/Question";
import AnwserLine from "./AnwserLine/AnwserLine";

const Query = ({setAnwser, question, state}) => {


    return(
        <div className = "Query">  
            <Question question = {question}/>
            <AnwserLine setAnwser={setAnwser}/>
            <div>
                {(state!==-1) ? state : "do zaznaczenia"}
            </div>
        </div>
    )
}

export default Query;