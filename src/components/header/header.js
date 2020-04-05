import React, {Component} from 'react';
import {Logo} from 'loft-taxi-mui-theme';

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
                <li className="menu__item">Карта</li>
                <li className="menu__item">Профиль</li>
                <li className="menu__item">Выйти</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;