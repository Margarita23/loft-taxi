import React, {Component} from "react";
import {Button, Input, Link} from '@material-ui/core';
import authContext from "../auth/auth-context";

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
    }

    handleChangeEmail(event){
        this.setState({email: event.target.value});
    }

    handleChangePass(event){
        this.setState({password: event.target.pass});
    }

    loginCheck(email, password, context){
        let userLogged = true;
        if(userLogged) {
            context.login(email, password);
        }
        return context.isLoggedIn;
    }

    render () {
        let {changeForm, authenticate, email, password} = this.props;

        return (
            <authContext.Consumer>
            {context => (
                <div className="login__form">
                    <h3 className="login__title">Войти</h3>
                    <div className="register__block">
                        Новый пользователь? <Link onClick={() => { changeForm("reg") }}>Зарегестрируйтесь</Link>   
                    </div>
                    <div className="inputs__blocks">
                        <div className="login__block">
                            <label>Имя пользователя&#42;</label>
                            <Input type="text" value={this.state.email} onChange={this.handleChangeEmail}></Input>
                        </div>
                        <div className="pass__block">
                            <label>Пароль&#42;</label>
                            <Input type="password" value={password} onChange={this.handleChangePass}></Input>
                        </div>
                    </div>
                    <Button variant="contained" color="primary" className="btn login__btn" onClick={() => { authenticate(this.user, this.loginCheck(email, password, context), "order") }}>Войти</Button>
                </div>
            )}
            </authContext.Consumer>
        )
    }
}

export default Login;