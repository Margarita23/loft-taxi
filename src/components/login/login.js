import React, {Component} from "react";
import {Button, Input, Link} from '@material-ui/core';
import PropTypes from 'prop-types';

class Login extends Component{

    render () {
        const {changeForm, authenticate, email, password} = this.props;

        return (
            <div className="login__form">
                <h3 className="login__title">Войти</h3>
                <div className="register__block">
                    Новый пользователь? <Link onClick={() => { changeForm("reg") }}>Зарегестрируйтесь</Link>   
                </div>
                <div className="inputs__blocks">
                    <div className="login__block">
                        <label>Имя пользователя&#42;</label>
                        <Input value={email}></Input>
                    </div>
                    <div className="pass__block">
                        <label>Пароль&#42;</label>
                        <Input value={password}></Input>
                    </div>
                </div>
                <Button variant="contained" color="primary" className="btn login__btn" onClick={() => { authenticate(this.user, "order") }}>Войти</Button>
            </div>
        )
    }
}

Login.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default Login;