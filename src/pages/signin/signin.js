import React, {Component} from "react";

import {Button, Input, Link} from '@material-ui/core';
import {Logo} from 'loft-taxi-mui-theme';

import Login from "../../components/login/login";
import Reg from "../../components/reg/reg";

const forms = {
    login: "login",
    reg: "reg"
}

class SignIn extends Component {
    state = {
        signInForm: "login",
        auth: false
    };

    changeForm = (form) => {
        this.setState({signInForm: form});
    }

    createUser = (newUser, checkData, nextPage) => {
        if(checkData){
            this.props.navigateTo(nextPage);
        }
    }

    authenticate = (user, canGo, nextPage) => {
        if(canGo){
            this.props.navigateTo(nextPage);
        }
    }

    render() {
        const {login, reg} = forms;
        let trueForm;
        if(this.state.signInForm === login){
            trueForm = <Login authenticate={this.authenticate} changeForm={this.changeForm}></Login>
        } else if (this.state.signInForm === reg){
            trueForm = <Reg createUser={this.createUser} changeForm={this.changeForm}></Reg>
        }
        
        return (
            <div className="login__container">
                <div data-testid="my-container">Hello</div>
                <Logo white></Logo>
                {trueForm}
            </div>
        )
    }
}

export default SignIn;