import React from "react";
import "./Question.css";

const Question = ({question}) => {
    
    return(
        <div className="Question">
            {question}
        </div>
    )
}

export default Question;