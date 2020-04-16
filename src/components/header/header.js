import React, {Component} from 'react';
import { Logo } from 'loft-taxi-mui-theme';

import Menu from "../../components/menu/menu";

class Header extends Component {

  render() {
    return (
      <div className="wrapper header__wrapper">
        <div className="container">
          <div className="header__block">
            <Logo></Logo>
            <nav className="menu__nav" id="header__menu">
              <Menu className="myMenu" parentId="menu__nav" navigateTo={this.props.navigateTo}></Menu>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;