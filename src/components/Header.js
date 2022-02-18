import { Close, MenuOutlined } from '@material-ui/icons';
import {useState}from 'react';
import { Link } from 'react-router-dom';

import '../styles/layout/Header.scss';


const Header = () => {

    const [active, setActive]=useState(false);

    const showMenu =()=>{
        setActive(!active)
    }


  return (
    <div className="header">
      <div className="header__logo">
        <h1 className='header__title'>PatriM</h1>
      </div>

      <nav className={active ? 'navbar active': 'navbar'}>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showMenu}/>
          </div>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/section">About</Link>
          </li>
          <li>
            <Link to="/works">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

    <div className='changer'>
        <MenuOutlined className='menu' onClick={showMenu}/>
    </div>

    </div>
  );
};
export default Header;
