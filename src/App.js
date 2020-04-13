import React, {Component} from 'react';
import './App.scss';

import Login from './pages/login/login';
import Reg from './pages/reg/reg';
import Order from './pages/order/order';
import Profile from './pages/profile/profile';

class App extends Component {
   
   navigateTo = (page) => {
      this.setState({ currentPage: page});
      
      switch(page){
         case 'login' : return this.Component = <Login navigateTo={this.navigateTo}/>;
         case 'reg' : return  this.Component = <Reg navigateTo={this.navigateTo}/>;
         case 'order' : return  this.Component = <Order navigateTo={this.navigateTo}/>;
         case 'profile' : return  this.Component = <Profile navigateTo={this.navigateTo}/>;
         default : break;
      }
   }
   
   Component = <Login navigateTo={this.navigateTo}/>;

   render() {      
      return (
         this.Component
      );
   }
}

export default App;
