import React, {Component} from 'react';
import './App.scss';

import Order from './pages/order/order';
import Profile from './pages/profile/profile';

import Auth from "./components/auth/auth";

const pages = {
   order: "order",
   profile: "profile"
}

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: {},
         currentPage: pages.order
       }
   }
   
   navigateTo = (page) => {
      this.setState({ currentPage: page});
   }

   render() {
      const {order, profile} = pages;
      let currComponent = null;
      switch(this.state.currentPage){
         case order : currComponent = <Order navigateTo={this.navigateTo}/>; break;
         case profile : currComponent = <Profile navigateTo={this.navigateTo}/>; break;
         default : break;
      }
      return (
         <Auth navigateTo={this.navigateTo}>
            { currComponent }
         </Auth>
      );
   }
}

export default App;
