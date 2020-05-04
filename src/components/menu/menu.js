import React from "react";
import Button from '@material-ui/core/Button';
import authContext from "../auth/auth-context";

let menu = {
    order: "Карта",
    profile: "Профиль",
}

export default function Menu(props){
    let menuElements = (
        <authContext.Consumer>
            {context => (
                <ul className="menu__list">
                    {Object.entries(menu).map(( item, index ) => 
                        <li key={index} className="menu__item">
                            <Button className="header__link" onClick={() => { props.navigateTo(item[0]) }}>{item[1]}</Button>
                        </li>
                    )}
                    <li className="menu__item">
                        <Button className="header__link" onClick={() => {context.logout()}}>Выйти</Button>
                    </li>
                </ul>
            )}
        </authContext.Consumer>
    )
    return menuElements;
}
