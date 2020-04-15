import React, {Component} from 'react';
import './App.scss';

import SignIn from './pages/signin/signin';
import Order from './pages/order/order';
import Profile from './pages/profile/profile';

const pages = {
   signin: "signin",
   order: "order",
   profile: "profile"
}

class App extends Component {
   state = { currentPage: pages.signin };
   
   navigateTo = (page) => {
      this.setState({ currentPage: page});
      console.log("state");
      console.log(this.state.currentPage);
   }

   render() {
      const {signin, order, profile} = pages;
      switch(this.state.currentPage){
         case signin: return  <SignIn navigateTo={this.navigateTo}/>;
         case order : return  <Order navigateTo={this.navigateTo}/>;
         case profile : return  <Profile navigateTo={this.navigateTo}/>;
         default : return null;
      }
   }
}

export default App;
