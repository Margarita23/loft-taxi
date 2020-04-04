import React from 'react';
import {Button, Input, Link, FormLabel} from '@material-ui/core';
import {Logo, MCIcon} from 'loft-taxi-mui-theme';

class Reg extends React.Component {
  render() {
    return (
      <div>
        <div class="reg__container">
          <div class="container__form">
            <h3 class="reg__title">Регистрация</h3>
            <div class="login__block">
              Уже зарегистрирован? <Link>Войти</Link>   
            </div>
            <div class="inputs__blocks">
              <div class="email__block">
                <FormLabel>Адрес электронной почты</FormLabel>
                <Input></Input>
              </div>
              <div class="name__block">
                <div class="name__sub-block">
                  <FormLabel>Имя</FormLabel>
                  <Input></Input>
                </div>
                <div class="name__sub-block">
                  <FormLabel>Фамилия</FormLabel>
                  <Input></Input>
                </div>
              </div>
              <div class="pass__sub-block">
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