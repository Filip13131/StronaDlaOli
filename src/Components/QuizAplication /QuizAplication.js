import React from "react";
import { useState , useEffect} from "react";
import Query from "../Query/Query";
import Anwser from "../Anwser";

const QuizAplication = ()=>{
    
    const [KajetanTimes, setKajetanTimes] = useState((-1));
    const [MikolajTimes, setMikolajTimes] = useState((-1));
    const [IgorTimes, setIgorTimes] = useState((-1));
    const [MarekTimes, setMarekTimes] = useState((-1));
    const [MaciekTimes, setMaciekTimes] = useState((-1));
    const [KajetanImprovement, setKajetanImprovment] = useState((-1));
    const [MikolajImprovement, setMikolajImprovment] = useState((-1));
    const [IgorImprovement, setIgorImprovment] = useState((-1));
    const [MarekImprovement, setMarekImprovment] = useState((-1));
    const [MaciekImprovement, setMaciekImprovment] = useState((-1));
    const [Delta, setDelta] = useState((-1));
    const [cost, setCost] = useState((-1));
    const [result, setResult] = useState("Wypelnij wszystko!");

    const values = [KajetanTimes,MikolajTimes,IgorTimes,MarekTimes,MaciekTimes,KajetanImprovement,MikolajImprovement,IgorImprovement,MarekImprovement,MaciekImprovement,Delta,cost];
    const questions = [
        "Ile razy w ciagu najblizszego miesiaca planujesz widzieć Kajetana?",
        "Ile razy w ciagu najblizszego miesiaca planujesz widzieć Mikolaj?",
        "Ile razy w ciagu najblizszego miesiaca planujesz widzieć Igor?",
        "Ile razy w ciagu najblizszego miesiaca planujesz widzieć Marek?",
        "Ile razy w ciagu najblizszego miesiaca planujesz widzieć Maciek?",
        "Jak przyjscie na skwerowa poprawi twoja relacje z Kajetanem?",
        "Jak przyjscie na skwerowa poprawi twoja relacje z Mikolajem?",
        "Jak przyjscie na skwerowa poprawi twoja relacje z Igorem?",
        "Jak przyjscie na skwerowa poprawi twoja relacje z Marek?",
        "Jak przyjscie na skwerowa poprawi twoja relacje z Maciekxd?",
        "Jak bardzo interesuje cie jak bedziesz sie czuc za miesiac?",
        "Jak duzo wysilku bedzie kosztowac cie przyjscie na skwerowa?"
    ];
    useEffect(() => {
        
        if (!(KajetanTimes===-1||MikolajTimes===-1||IgorTimes===-1||MarekTimes===-1||MaciekTimes===-1||KajetanImprovement===-1||MikolajImprovement===-1||IgorImprovement===-1||MarekImprovement===-1||MaciekImprovement===-1||Delta===-1||cost===-1)){
            return () => {
                var sol = 0;
                sol = cost - ((KajetanImprovement/(1-(Delta/10)))*KajetanTimes*2)  - ((MikolajImprovement/(1-(Delta/10)))*MikolajTimes*2) - ((IgorImprovement/(1-(Delta/10)))*IgorTimes*2) - ((MarekImprovement/(1-(Delta/10)))*MarekTimes*2)- ((MaciekImprovement/(1-(Delta/10)))*MaciekTimes*2)
                var res;
                if (sol<0){
                    res = "TAK IDZ"
                }
                if ((sol>=0) && (sol <0.1)) {
                    res = "NIE WIEM"
                }
                if (sol>=0.1){
                    res ="NIE IDZ!!!!"
                }
                setResult(res)
        }
        };
    }, [setResult,KajetanTimes,MikolajTimes,IgorTimes,MarekTimes,MaciekTimes,KajetanImprovement,MikolajImprovement,IgorImprovement,MarekImprovement,MaciekImprovement,Delta,cost]);

    return (
        <div className = "QuizAplication">
            <Query setAnwser= {setKajetanTimes} question = {questions[0]} state = {KajetanTimes}/>
            <Query setAnwser= {setMikolajTimes} question = {questions[1]} state = {MikolajTimes}/>
            <Query setAnwser= {setIgorTimes} question = {questions[2]} state = {IgorTimes}/>
            <Query setAnwser= {setMarekTimes} question = {questions[3]} state = {MarekTimes}/>
            <Query setAnwser= {setMaciekTimes} question = {questions[4]} state = {MaciekTimes}/>
            <Query setAnwser= {setKajetanImprovment} question = {questions[5]} state = {KajetanImprovement}/>
            <Query setAnwser= {setMikolajImprovment} question = {questions[6]} state = {MikolajImprovement}/>
            <Query setAnwser= {setIgorImprovment} question = {questions[7]} state = {IgorImprovement}/>
            <Query setAnwser= {setMarekImprovment} question = {questions[8]} state = {MarekImprovement}/>
            <Query setAnwser= {setMaciekImprovment} question = {questions[9]} state = {MaciekImprovement}/>
            <Query setAnwser= {setDelta} question = {questions[10]} state = {Delta}/>
            <Query setAnwser= {setCost} question = {questions[11]} state = {cost}/>
            <Anwser result ={result}/>
        </div>
    )

}

export default QuizAplication;
