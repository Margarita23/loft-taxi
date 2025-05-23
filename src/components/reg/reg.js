import React, {Component} from "react";
import {Button, Input, Link, FormLabel} from '@material-ui/core';
import PropTypes from "prop-types";
import authContext from "../auth/auth-context";

class Reg extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      password: ''
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
    this.handleChangeLastname = this.handleChangeLastname.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
  }

  handleChangeEmail(event){
    this.setState({email: event.target.value});
  }

  handleChangeFirstname(event){
    this.setState({firstname: event.target.value});
  }

  handleChangeLastname(event){
    this.setState({lastname: event.target.value});
  }

  handleChangePass(event){
    this.setState({password: event.target.value});
  }
  
  checkDataOfNewUser = (context) => {
    let checkData = true;
    if(checkData) {
      context.login();
    }
    return context.isLoggedIn;
  }

  render() {
    const {changeForm, createUsser, email, firstname, lastname, password} = this.props;

    let newUser = {email, firstname, lastname, password};

    return (
      <authContext.Consumer>
        { context => (
          <div className="reg__form">
            <h3 className="reg__title">Регистрация</h3>
            <div className="to-login__block">
              Уже зарегистрирован? <Link onClick={() => { changeForm("login")}}>Войти</Link>   
            </div>
            <div className="inputs__blocks">
              <div className="email__block">
                <FormLabel>Адрес электронной почты</FormLabel>
                <Input data-testid="email-input" email={email}></Input>
              </div>
              <div className="name__block">
                <div className="name__sub-block">
                  <FormLabel>Имя</FormLabel>
                  <Input data-testid="fname-input"firstname={firstname}></Input>
                </div>
                <div className="surname__sub-block">
                  <FormLabel>Фамилия</FormLabel>
                  <Input data-testid="lname-input" lastname={lastname}></Input>
                </div>
              </div>
              <div className="pass__block">
                <FormLabel>Пароль&#42;</FormLabel>
                <Input data-testid="pass-input" password={password}></Input>
              </div>
            </div>
            <Button  data-testid="auth-button" variant="contained" color="primary" className="btn reg__btn" onClick={() => { this.props.createUser(newUser, this.checkDataOfNewUser(context), "order") }}>Зарегистрироваться</Button>
          </div>
        )}
      </authContext.Consumer>
    )
  }
}

// Reg.propTypes = {
//   email: PropTypes.string.isRequired,
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired 
// }

export default Reg;