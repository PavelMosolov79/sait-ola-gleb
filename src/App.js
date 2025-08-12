import './App.css';
import "./AppMobile.css";
import Paper from "./assets/paper.png";
import PaperTwo from "./assets/paperTwo.png";
import Gleb from "./assets/gleb.png";
import Ola from "./assets/ola.png";
import Shaha from "./assets/shaha.png";
import YandexMap from './map';
import Sel from "./assets/sel.png";

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
        <div className='personsImage'>
          <div className='persons'>
            <img className='personOne' src={Ola} alt="Ola"/>
            <img className='personTwo' src={Gleb} alt="Gleb"/>   
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${PaperTwo})` }}
        className='two-block'
      >
        <div>
          <h3>Дорогие друзья и родные!</h3>
          <p>Приглашаем Вас на торжество посвященное дню нашей свадьбы!</p>
          <h3>Сбор гостей</h3>
          <p>15:00</p>
        </div>
        <div className='shaha'>
          <img src={Shaha} alt='shaha'/>
        </div>
        <div>
          <h3>Локация</h3>
          <p>СНТ Отдых-2 территория, 250</p>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${Paper})`, paddingTop: "50px" }}
        className='three-block'
      >
        <YandexMap />
        <h3>Стиль торжества</h3>
        <p>Cоответствующий локации «Сельская свадьба»</p>
        <h3>Дресс-код</h3>
        <p>Полностью соответствующий стилю торжества, а так же полный полет Вашей фантазии</p>
      </div>

      <div
        style={{ backgroundImage: `url(${PaperTwo})` }}
        className='two-block'
      >
        <img src={Sel} alt="sel"/>
        <p>В качестве подарка мы будем рады принять от Вас небольшое вложение в нашу молодую семью</p>
        <h3>Подтверждение</h3>
        <p>Большая просьба подтвердить свое присутствие не позднее 15.08.2025</p>
        <a 
          href='https://t.me/@Lol666z'
          className='hrefGoTo'
        >
          Подтвердить присутствие
        </a>
      </div>
    </div>
  );
}

export default App;