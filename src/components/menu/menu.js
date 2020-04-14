import React from "react";
import Button from '@material-ui/core/Button';

let menu = {
    order: "Карта",
    profile: "Профиль",
    login: "Выйти"
  }

export default function Menu(props){

    let menuElements = (
        <ul className="menu__list">
            {Object.entries(menu).map(( item, index ) => 
                <li key={index} className="menu__item">
                    <Button className="header__link" onClick={() => { props.navigateTo(item[0]) }}>{item[1]}</Button>
                </li>
            )}
        </ul>
    )
    return menuElements;
}
