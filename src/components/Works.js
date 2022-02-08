import '../styles/layout/Works.scss';
//import imgwork from '../images/imgprojectcard.png';
import imgFuturama from '../images/desktop.png';
import imgAnonymous from '../images/imgHtmlCss.png';
import imgwork2 from '../images/imgcatchgauss.png';
import imgwork3 from '../images/imgharry.png';
import imgwork4 from '../images/imgfuturama.jpg';


const Works = () => {
  return (
    <div className="works">
      <div className="work__section">
        <div className="cards">
          <img src={imgFuturama} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={imgAnonymous} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={imgwork3} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={imgwork4} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={imgwork4} alt="" />
          <button>See work</button>
        </div>
        <div className="cards">
          <img src={imgwork2} alt="" />
          <button>See work</button>
        </div>
      </div>
    </div>
  );
};
export default Works;
