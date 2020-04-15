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
    state = {signInForm: "login"};

    changeForm = (form) => {
        this.setState({signInForm: form});
    }

    render() {
        const {login, reg} = forms;
        let trueForm;
        if(this.state.signInForm === login){
            trueForm = <Login navigateTo={this.props.navigateTo} changeForm={this.changeForm}></Login>
        } else if (this.state.signInForm === reg){
            trueForm = <Reg navigateTo={this.props.navigateTo} changeForm={this.changeForm}></Reg>
        }

        return (
            <div className="login__container">
                <Logo white></Logo>
                {trueForm}
            </div>
        )
    }
}

export default SignIn;