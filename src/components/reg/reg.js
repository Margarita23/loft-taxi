import React from "react";
import {Button, Input, Link, FormLabel} from '@material-ui/core';
import PropTypes from "prop-types";
import authContext from "../auth/auth-context";

function Reg(props) {
    
    const {changeForm, createUser, email, firstname, lastname, password} = props;

    let newUser = {email, firstname, lastname, password};

    let checkDataOfNewUser = (context) => {
      let checkData = true;
      if(checkData) {
        context.login();
      }
      return context.auth;
    }

    return (
      <authContext.Consumer>
        { context => (
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
                  <Input firstname={firstname}></Input>
                </div>
                <div className="surname__sub-block">
                  <FormLabel>Фамилия</FormLabel>
                  <Input lastname={lastname}></Input>
                </div>
              </div>
              <div className="pass__block">
                <FormLabel>Пароль&#42;</FormLabel>
                <Input password={password}></Input>
              </div>
            </div>
            <Button variant="contained" color="primary" className="btn reg__btn" onClick={() => { createUser(newUser, checkDataOfNewUser(context), "order") }}>Зарегистрироваться</Button>
          </div>
        )}
      </authContext.Consumer>
    )
}

Reg.propTypes = {
  name: PropTypes.string
};

export default Reg;