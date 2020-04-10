import React, {Component} from "react";

import { Button, Input, Link, FormLabel} from '@material-ui/core';

class Profile extends Component {
  render() {
    return (
      <>
        <div className="wrapper profile__wrapper">
          <div className="container profile__container">
            <div className="profile__box">
              <h3 className="profile__title">Профиль</h3>
              <p className="profile__sub-title">Способ оплаты</p>
              <div className="profile__info">
                <div className="profile__block">
                  <div className="profile__sub-block">
                    <label>Номер карты:</label>
                    <input className="profile__input"></input>
                    <div className="profile__btn-delete"></div>
                  </div>
                  <div className="profile__sub-block">
                    <label>Срок действия:</label>
                    <input className="profile__input profile__input--short" placeholder="00/00"></input>
                    <div className="profile__btn-delete"></div>
                  </div>
                </div>
                <div className="profile__block">
                  <div className="profile__sub-block">
                    <label>Имя владельца:</label>
                    <input className="profile__input"></input>
                    <div className="profile__btn-delete"></div>
                  </div>
                  <div className="profile__sub-block">
                    <label>CVV: 
                      <div className="profile__cvv-question">
                        <div class="cvv-question__explanation">
                          3 последние цифры на оборотной стороне карты
                        </div>
                      </div>
                    </label>  
                    <input className="profile__input profile__input--short"></input>
                    <div className="profile__btn-delete"></div>
                  </div>
                </div>
              </div>
              <Button variant="contained" color="primary" className="profile__save-btn">Сохранить</Button>
            </div>
          </div>
          <div className="map__control"></div>
        </div>
      </>
    );
  }
}

export default Profile;