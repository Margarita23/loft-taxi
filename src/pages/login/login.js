import React, {Component} from 'react';

import { Button, Input, Link, FormLabel} from '@material-ui/core';
import Reg from '../reg/reg';

class Login extends Component {

   goToReg = () => {
        return (
            <Reg></Reg>
        );
   }

    render() {
       return (
          <>
             <div className="login__container">
                <div className="container__form">
                    <h3 className="login__title">Войти</h3>
                    <div className="register__block">
                        Новый пользователь? <Link onClick={() => {console.log("Hello"); this.goToReg()}}>Зарегестрируйтесь</Link>   
                    </div>
                    <div className="inputs__blocks">
                        <div className="login__block">
                            <FormLabel>Имя пользователя</FormLabel>
                            <Input></Input>
                        </div>
                        <div className="pass__block">
                            <FormLabel>Пароль&#42;</FormLabel>
                            <Input></Input>
                        </div>
                    </div>
                    <Button variant="contained" color="primary">Войти</Button>
                </div>
             </div>
          </>
       );
    }
}

export default Login;