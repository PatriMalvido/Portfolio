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
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={harrypotterWork} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={gameWork} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={apcJavascriptWork} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={apcNodeWork} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={gamecatchWork} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={maquetacionWork} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={animeWork} alt="" />
          <button>See work</button>
        </div>
      </div>
    </div>
  );
};
export default Works;
