import React, {Component} from 'react';
import './App.scss';

import Login from './pages/login/login';
import Reg from './pages/reg/reg';
import Order from './pages/order/order';
import Profile from './pages/profile/profile';

import Header from "./components/header/header.js";

class App extends Component {
   state = { currentPage: this.props.initialPage };
   
   navigateTo = (page) => {
      this.setState({ currentPage: page});
      
      switch(page){
         case 'login' : return this.Component = <Login navigateTo={this.navigateTo}/>;
         case 'reg' : return  this.Component = <Reg navigateTo={this.navigateTo}/>;
         case 'order' : return  this.Component = <><Header navigateTo={this.navigateTo}/><Order navigateTo={this.navigateTo}/></>;
         case 'profile' : return  this.Component = <><Header navigateTo={this.navigateTo}/><Profile navigateTo={this.navigateTo}/></>;
         default : break;
      }
   }
   
   Component = (
      <>
         <Header navigateTo={this.navigateTo}/>
         <Profile navigateTo={this.navigateTo}/>
      </>
   );

   render() {      
      return (
         <>
            {this.Component}
         </>
      );
   }
}

App.defaultProps = {
   initialPage: "login",
};

export default App;
