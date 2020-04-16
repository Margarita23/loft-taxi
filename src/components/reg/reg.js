import React from "react";
import {Button, Input, Link, FormLabel} from '@material-ui/core';
import PropTypes from 'prop-types';

export default function Reg(props) {
    
    const {changeForm, navigateTo} = props;

    return (
        <div className="reg__form">
          <h3 className="reg__title">Регистрация</h3>
          <div className="to-login__block">
            Уже зарегистрирован? <Link onClick={() => { changeForm("login")}}>Войти</Link>   
          </div>
          <div className="inputs__blocks">
            <div className="email__block">
              <FormLabel>Адрес электронной почты</FormLabel>
              <Input></Input>
            </div>
            <div className="name__block">
              <div className="name__sub-block">
                <FormLabel>Имя</FormLabel>
                <Input></Input>
              </div>
              <div className="surname__sub-block">
                <FormLabel>Фамилия</FormLabel>
                <Input></Input>
              </div>
            </div>
            <div className="pass__block">
              <FormLabel>Пароль&#42;</FormLabel>
              <Input></Input>
            </div>
          </div>
          <Button variant="contained" color="primary" className="btn reg__btn" onClick={() => { navigateTo("order") }}>Зарегистрироваться</Button>
        </div>
    )
}

Reg.propTypes = {
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired 

}