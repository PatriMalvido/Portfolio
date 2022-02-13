import '../styles/layout/Works.scss';
import futuramaWork from '../images/futuramaWork.jpg';
import harrypotterWork from '../images/harrypotterWork.jpg';
import gameWork from '../images/gameWork.jpg';
import apcJavascriptWork from '../images/apcJavascriptWork.jpg';
import apcNodeWork from '../images/apcNodeWork.jpg';
import gamecatchWork from '../images/gamecatchWork.jpg';
import maquetacionWork from '../images/maquetacionWork.jpg';
import animeWork from '../images/animeWork.jpg';

const Works = () => {
  return (
    <div className="works">
      <div className="work__section">
        <div className="cards">
          <img src={futuramaWork} alt="" />
          <a href="https://patrimalvido.github.io/Futurama/">
            <button>See work</button>
          </a>
        </div>
        <div className="cards">
          <img src={harrypotterWork} alt="" />
          <a href="http://beta.adalab.es/modulo-3-evaluacion-final-PatriMalvido/">
            <button>See work</button>
          </a>
        </div>
        <div className="cards">
          <img src={gameWork} alt="" />
          <a href='http://beta.adalab.es/modulo-2-evaluacion-intermedia-PatriMalvido/'>
          <button>See work</button>
          </a>
        </div>
        <div className="cards">
          <img src={apcJavascriptWork} alt="" />
          <a href='http://beta.adalab.es/project-promo-o-module-2-team-5/'>
          <button>See work</button>
          </a>
        </div>
        <div className="cards">
          <img src={apcNodeWork} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={gamecatchWork} alt="" />
          <a href='https://patrimalvido.github.io/Atrapa-al-gato/'>
          <button>See work</button>
          </a>
        </div>
        <div className="cards">
          <img src={maquetacionWork} alt="" />
          <a href='http://beta.adalab.es/modulo-1-evaluacion-final-PatriMalvido/'>
          <button>See work</button>
          </a>
        </div>
        <div className="cards">
          <img src={animeWork} alt="" />
          <a href="http://beta.adalab.es/modulo-2-evaluacion-final-PatriMalvido/">
            <button>See work</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Works;
