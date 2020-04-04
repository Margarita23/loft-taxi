import React from 'react';


import {Logo, MCIcon} from 'loft-taxi-mui-theme';
import { Button, Input, Link, FormLabel, FormHelperText} from '@material-ui/core';


class Login extends React.Component {
    render() {
       return (
          <div>
             <div class="login__container">
                <div class="container__form">
                    <h3 class="login__title">Войти</h3>
                    <div class="register__block">
                        Новый пользователь? <Link>Зарегестрируйтесь</Link>   
                    </div>
                    <div class="inputs__blocks">
                        <div class="login__block">
                            <FormLabel>Имя пользователя</FormLabel>
                            <Input></Input>
                        </div>
                        <div class="pass__block">
                            <FormLabel>Пароль&#42;</FormLabel>
                            <Input></Input>
                        </div>
                    </div>
                    <Button variant="contained" color="primary">Войти</Button>
                </div>
             </div>
          </div>
       );
    }
}

export default Login;