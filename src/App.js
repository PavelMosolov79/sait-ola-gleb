import './App.css';
import Paper from "./assets/paper.png";
import PaperTwo from "./assets/paperTwo.png";
import Gleb from "./assets/gleb.png";
import Ola from "./assets/ola.png"


function App() {
  return (
    <div className="App">
      <div 
        style={{ backgroundImage: `url(${Paper})` }}
        className='one-block'
      >
        <h1>wedding</h1>
        <h2>06.09.2025</h2>
        <h3>ГЛЕБ & ОЛЬГА</h3>
        <div className='persons'>
          <img className='personOne' src={Ola} alt="Ola"/>
          <img className='personTwo' src={Gleb} alt="Gleb"/>   
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${PaperTwo})` }}
        className='one-block'
      >
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;