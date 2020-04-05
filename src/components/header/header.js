import React from 'react';
import {Logo} from 'loft-taxi-mui-theme';

class Header extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <div class="container">
          <div class="header__block">
            <Logo></Logo>
            <nav class="menu__nav">
              <ul class="menu__list">
                <li class="menu__item">Карта</li>
                <li class="menu__item">Профиль</li>
                <li class="menu__item">Выйти</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;