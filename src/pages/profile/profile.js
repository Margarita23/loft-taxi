import React, {Component} from "react";

import { Button, Input, Link, FormLabel} from '@material-ui/core';

class Profile extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="container container__profile">
            <h3 className="profile__title">Профиль</h3>
            <p className="profile__sub-title">Способ оплаты</p>
            <div className="profile__info">
              <div className="profile__block">
                <div className="profile__sub-block">
                  <label>Номер карты:</label>
                  <Input className="profile__input"></Input>
                </div>
                <div className="profile__sub-block">
                  <label>Срок действия:</label>
                  <Input className="profile__input">></Input>
                </div>
              </div>
              <div className="profile__block">
                <div className="profile__sub-block">
                  <label>Имя владельца:</label>
                  <Input className="profile__input">></Input>
                </div>
                <div className="profile__sub-block">
                  <label>CVV:</label>
                  <Input className="profile__input">></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;