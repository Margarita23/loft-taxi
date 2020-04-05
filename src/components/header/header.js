import React, {Component} from 'react';
import {Logo} from 'loft-taxi-mui-theme';
import {Link} from '@material-ui/core';

const PAGES = {
  map: <></>,
  profile: <></>,
  logout: <></>,
}

class Header extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="header__block">
            <Logo></Logo>
            <nav className="menu__nav">
              <ul className="menu__list">
                <li className="menu__item"><Link>Карта</Link></li>
                <li className="menu__item"><Link>Профиль</Link></li>
                <li className="menu__item"><Link>Выйти</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;