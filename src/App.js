import React, {Component} from 'react';
import './App.scss';

import Login from './pages/login/login';
import Reg from './pages/reg/reg';
import Order from './pages/order/order';
import Profile from './pages/profile/profile';

const pages = {
   login: "login",
   reg: "reg",
   order: "order",
   profile: "profile"
}

class App extends Component {
   state = { currentPage: pages.login };
   
   navigateTo = (page) => {
      this.setState({ currentPage: page});
   }

   render() {
      const {login, reg, order, profile} = pages;        
      switch(this.state.currentPage){
         case login : return <Login navigateTo={this.navigateTo}/>;
         case reg : return  <Reg navigateTo={this.navigateTo}/>;
         case order : return  <Order navigateTo={this.navigateTo}/>;
         case profile : return  <Profile navigateTo={this.navigateTo}/>;
         default : return null;
      }
   }
}

export default App;
