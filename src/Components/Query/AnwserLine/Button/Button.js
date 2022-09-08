import './Button.css';

const Button = ({setVirable , anwser})=>{

    return(
        <div className='Button'>
            <button onClick={()=> setVirable(anwser)}>
                {anwser}
            </button>
        </div>
    )
}

export default Button;