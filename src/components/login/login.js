import React from "react";
import {Button, Input, Link} from '@material-ui/core';

export default function Login(props) {

    const {changeForm, navigateTo} = props;
    
    return (
        <div className="login__form">
            <h3 className="login__title">Войти</h3>
            <div className="register__block">
                Новый пользователь? <Link onClick={() => { changeForm("reg") }}>Зарегестрируйтесь</Link>   
            </div>
            <div className="inputs__blocks">
                <div className="login__block">
                    <label>Имя пользователя&#42;</label>
                    <Input></Input>
                </div>
                <div className="pass__block">
                    <label>Пароль&#42;</label>
                    <Input></Input>
                </div>
            </div>
            <Button variant="contained" color="primary" className="btn login__btn" onClick={() => { navigateTo("order") }}>Войти</Button>
        </div>
    )
}