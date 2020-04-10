import React, {Component} from 'react';
import { Logo } from 'loft-taxi-mui-theme';
import Button from '@material-ui/core/Button';

class Header extends Component {

  render() {
    return (
      <div className="wrapper header__wrapper">
        <div className="container">
          <div className="header__block">
            <Logo></Logo>
            <nav className="menu__nav">
              <ul className="menu__list">
                <li className="menu__item">
                  <Button className="header__link" onClick={() => {this.props.navigateTo("order")}}>Карта</Button>
                </li>
                <li className="menu__item">
                  <Button className="header__link" onClick={() => {this.props.navigateTo("profile")}}>Профиль</Button>
                </li>
                <li className="menu__item">
                  <Button className="header__link" onClick={() => {this.props.navigateTo("login")}}>Выйти</Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;