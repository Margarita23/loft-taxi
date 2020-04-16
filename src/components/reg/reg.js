import React from "react";
import {Button, Input, Link, FormLabel} from '@material-ui/core';
import PropTypes from 'prop-types';

export default function Reg(props) {
    
    const {changeForm, createUser, email, firstName, lastName, password} = props;

    let newUser = {email, firstName, lastName, password};

    return (
        
        <div className="reg__form">
          <h3 className="reg__title">Регистрация</h3>
          <div className="to-login__block">
            Уже зарегистрирован? <Link onClick={() => { changeForm("login")}}>Войти</Link>   
          </div>
          <div className="inputs__blocks">
            <div className="email__block">
              <FormLabel>Адрес электронной почты</FormLabel>
              <Input email={email}></Input>
            </div>
            <div className="name__block">
              <div className="name__sub-block">
                <FormLabel>Имя</FormLabel>
                <Input firstName={firstName}></Input>
              </div>
              <div className="surname__sub-block">
                <FormLabel>Фамилия</FormLabel>
                <Input lastName={lastName}></Input>
              </div>
            </div>
            <div className="pass__block">
              <FormLabel>Пароль&#42;</FormLabel>
              <Input password={password}></Input>
            </div>
          </div>
          <Button variant="contained" color="primary" className="btn reg__btn" onClick={() => { createUser(newUser, "order") }}>Зарегистрироваться</Button>
        </div>
    )
}

Reg.propTypes = {
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired 

}