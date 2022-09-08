import logo from './logo.svg';
import './App.css';
import QuizAplication from './Components/QuizAplication /QuizAplication';

function App() {
  return (
    <div className="App">
      <div>
        "Shoud I stay?"
      </div>
      <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"  width="5000" height="200"></img>
      <div>
        "Or Shoud I Go?!"
      </div>
      <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg" width="100" height="200"></img>
      <QuizAplication/>
      <img src="https://pbs.twimg.com/media/FaOx36JXwAAMwJ_?format=jpg&name=4096x4096"  ></img>
      
      <div>
        P.S. tak te jestem podjarany w opór, ale byłem zajęty robieniem ci tej cudownie okropnej strony
      </div>

    </div>

  );
}

export default App;
