import React from 'react';
import {Logo, MCIcon} from 'loft-taxi-mui-theme';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <div class="container">
                        <div class="header__block">
                            <Logo></Logo>
                            <nav class="menu__nav">
                                <ul class="menu__list">
                                    <li class="menu__item">Карта</li>
                                    <li class="menu__item">Профиль</li>
                                    <li class="menu__item">Выйти</li>
                                    <li></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;