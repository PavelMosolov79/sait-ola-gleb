import './App.css';
import Paper from "./assets/paper.png";
import PaperTwo from "./assets/paperTwo.png";
import Gleb from "./assets/gleb.png";
import Ola from "./assets/ola.png"
import Shaha from "./assets/shaha.png"


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
        className='two-block'
      >
        <div>
          <h3>
            Дорогие друзья и родные!
          </h3>
          <p>
            Приглашаем Вас на торжество посвященное дню нашей свадьбы!
          </p>
          <h3>
            Сбор гостей
          </h3>
          <p>
            15:00
          </p>
        </div>
        <div className='shaha'>
          <img src={Shaha} alt='shaha'/>
        </div>
      </div>
    </div>
  );
}

export default App;