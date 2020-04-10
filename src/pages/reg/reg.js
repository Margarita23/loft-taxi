import React, {Component} from 'react';
import {Button, Input, Link, FormLabel} from '@material-ui/core';
import {Logo} from 'loft-taxi-mui-theme';

class Reg extends Component {
  render() {
    return (
      <>
        <div className="reg__container">
          <Logo white></Logo>
          <div className="reg__form">
            <h3 className="reg__title">Регистрация</h3>
            <div className="to-login__block">
              Уже зарегистрирован? <Link onClick={() => { this.props.navigateTo("login")}}>Войти</Link>   
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
            <Button variant="contained" color="primary" className="btn reg__btn">Зарегистрироваться</Button>
          </div>
        </div>
      </>
    );
  }
}

export default Reg;