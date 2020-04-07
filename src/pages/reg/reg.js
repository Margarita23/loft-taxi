import React, {Component} from 'react';
import {Button, Input, Link, FormLabel} from '@material-ui/core';

class Reg extends Component {
  render() {
    return (
      <div>
        <div className="reg__container">
          <div className="container__form">
            <h3 className="reg__title">Регистрация</h3>
            <div className="login__block">
              Уже зарегистрирован? <Link>Войти</Link>   
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
                <div className="name__sub-block">
                  <FormLabel>Фамилия</FormLabel>
                  <Input></Input>
                </div>
              </div>
              <div className="pass__sub-block">
                <FormLabel>Пароль&#42;</FormLabel>
                <Input></Input>
              </div>
            </div>
            <Button variant="contained" color="primary">Зарегистрироваться</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Reg;