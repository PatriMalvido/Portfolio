import { Instagram, Twitter, LinkedIn, GitHub } from '@material-ui/icons';
import '../styles/layout/Main.scss';
import imgPatri from '../images/mebackground.png';
import { Link } from 'react-router-dom';

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
              <a href="https://twitter.com/patrimalvido" title='Twitter'>
                <Twitter className="icon" />
              </a>
              <a href="https://www.instagram.com/patrimalvido/" title='Instagram'>
                <Instagram className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/patri-malvido-paz%C3%B3-9a4632230/" title='Linkedin'>
                <LinkedIn className="icon"/>
              </a>
              <a href="https://github.com/PatriMalvido" title='Github'>
                <GitHub className="icon" />
              </a>
            </div>

            <div className="buttons">
              <Link to="/works">
                <button>See my work</button>
              </Link>
            <a href='https://www.linkedin.com/in/patri-malvido/'>
              <button>Hire me</button>
              </a>
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
