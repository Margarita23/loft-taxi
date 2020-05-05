import React, {useContext} from "react";
import {Button, Input, Link} from '@material-ui/core';
import AuthContext from "../auth/auth-context";
import PropTypes from 'prop-types';

function Login(props){

    let context = useContext(AuthContext);

    let handleChangeEmail = (event) => {
        email = event.target.value;
    }

    let handleChangePass = (event) => {
        password = event.target.value;
    }

    let loginCheck = (email, password, context) => {
        let userLogged = true;
        if(userLogged) {
            context.login(email, password);
        }
        return context.isLoggedIn;
    }

    let {changeForm, authenticate, email, password} = props;

    return (
        <div className="login__form">
            <h3 className="login__title">Войти</h3>
            <div className="register__block">
                Новый пользователь? <Link onClick={() => { changeForm("reg") }}>Зарегестрируйтесь</Link>   
            </div>
            <div className="inputs__blocks">
                <div className="login__block">
                    <label>Имя пользователя&#42;</label>
                    <Input type="text" value={email} onChange={handleChangeEmail}></Input>
                </div>
                <div className="pass__block">
                    <label>Пароль&#42;</label>
                    <Input type="password" value={password} onChange={handleChangePass}></Input>
                </div>
            </div>
            <Button variant="contained" color="primary" className="btn login__btn" onClick={() => { authenticate(null, loginCheck(email, password, context), "order") }}>Войти</Button>
        </div>
    )
}

Login.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
} 

export default Login;