import { Instagram, Twitter, LinkedIn } from '@material-ui/icons';
import '../styles/layout/Main.scss';
import imgPatri from '../images/imgPatrisiluetbackground.png';

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__contain">
          <div className="text">
            <p>Hey There</p>
            <h1>I am Patri Malvido</h1>
            <p>Jr.Frontend Developer</p>

            <div className="icons">
              <Twitter className="icon" />
              <Instagram className="icon" />
              <LinkedIn className="icon" />
            </div>

            <div className="buttons">
              <button>See my work</button>
              <button>Hire me</button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={imgPatri} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Main;
