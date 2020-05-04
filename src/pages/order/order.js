import React, {Component} from 'react';
import {Button, Input} from '@material-ui/core';

import Header from "../../components/header/header.js";
import Map from "../../components/map/map";

import authContext from "../../components/auth/auth-context";

class Order extends Component {

    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
    }

    componentDidMount() {
        console.dir(this.mapRef.current);
    }

    render() {
        return (

            <authContext.Consumer>
                {auth => (
                    <>
                        {console.log("auth")}
                        {console.log(auth)}
                        <Header navigateTo={this.props.navigateTo}/>
                        <div className="wrapper order__wrapper">
                            <div className="container">
                                <div className="order__form">
                                    <div className="order__block order__block--where-from">
                                        <label>Откуда</label>
                                        <Input className="order__input"></Input>
                                        <div className="controls__container">
                                            <div className="order__control order__control--delete"></div>
                                            <div className="order__control order__control--variant"></div>
                                        </div>
                                    </div>
                                    <div className="order__block order__block--where-to">
                                        <label>Куда</label>
                                        <Input className="order__input"></Input>
                                        <div className="controls__container">
                                            <div className="order__control order__control--empty"></div>
                                            <div className="order__control order__control--add"></div>
                                        </div>
                                    </div>
                                    <Button variant="contained" color="primary" className="btn order__btn">Вызвать такси</Button>
                                </div>
                            </div>
                            <div className="map__control"><Map className="map" ref={this.mapRef}></Map></div>
                        </div>
                    </>
                )}
            </authContext.Consumer>
        );
    }
}

export default Order;