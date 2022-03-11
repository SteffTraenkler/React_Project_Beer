import './App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <figure className='titleDiv'>
        <Link to="/list">
          <img src="./images/allbeers.png" alt="bar beer" />
          <figcaption>All Beers</figcaption>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error eum expedita id nam nisi exercitationem, est sapiente rem aut adipisci, at perferendis non quod voluptatum nihil fugiat. Eaque, sed!</p>
      </figure>


      <figure className='titleDiv'>
        <Link to="/random">
          <img src="./images/randombeer.png" alt="few beers" />
          <figcaption>Random Beers</figcaption>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio error eum expedita id nam nisi exercitationem, est sapiente rem aut adipisci, at perferendis non quod voluptatum nihil fugiat. Eaque, sed!</p>
      </figure>
    </div>
  );
}

export default App;
