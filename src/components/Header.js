import { Close, MenuOutlined } from '@material-ui/icons';
import {useState}from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/layout/Header.scss';


const Header = () => {

    const [active, setActive]=useState(false);

    const showMenu =()=>{
        setActive(!active)
    }


  return (
    <div className="header">
      <div className="header__logo">
        <h1>PatriM</h1>
      </div>

      <nav className={active ? 'navbar active': 'navbar'}>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showMenu}/>
          </div>

          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/section"exact >About</NavLink>
          </li>
          <li>
            <NavLink to="/works"exact>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" exact>Contact</NavLink>
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
