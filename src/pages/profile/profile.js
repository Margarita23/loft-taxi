import React, {Component} from "react";
import {MCIcon} from 'loft-taxi-mui-theme';
import { Button} from '@material-ui/core';

import Header from "../../components/header/header";

class Profile extends Component {
  render() {
    return (
      <>
        <Header navigateTo={this.props.navigateTo}/>
        <div className="wrapper profile__wrapper">
          <div className="container profile__container">
            <div className="profile__box">
              <h3 className="profile__title">Профиль</h3>
              <p className="profile__sub-title">Способ оплаты</p>
              <div className="profile__info">
                <div className="profile__block">
                  <MCIcon className="mc-icon"></MCIcon>
                  <div className="profile__sub-block">
                    <label>Номер карты:</label>
                    <input className="profile__input profile__input--number" type="number"></input>
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
                    <input className="profile__input profile__input--name"></input>
                    <div className="profile__btn-delete"></div>
                  </div>
                  <div className="profile__sub-block">
                    <label>CVV: 
                      <div className="profile__cvv-question">
                        <div className="cvv-question__explanation">
                          3 последние цифры на оборотной стороне карты
                        </div>
                      </div>
                    </label>  
                    <input className="profile__input profile__input--short"></input>
                    <div className="profile__eye-container">
                      <div className="profile__btn-show"></div>
                      <div className="profile__btn-notshow"></div>
                    </div>
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