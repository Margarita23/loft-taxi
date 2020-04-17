import React, {Component} from 'react';
import './App.scss';

import SignIn from './pages/signin/signin';
import Order from './pages/order/order';
import Profile from './pages/profile/profile';

import AuthContext from "./components/auth-context/auth-context";

const pages = {
   signin: "signin",
   order: "order",
   profile: "profile"
}

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: {},
         currentPage: pages.signin
       }
   }
   
   navigateTo = (page) => {
      this.setState({ currentPage: page});
   }

   render() {
      const {signin, order, profile} = pages;
      let currComponent = null;
      switch(this.state.currentPage){
         case signin: currComponent = <SignIn navigateTo={this.navigateTo}/>; break;
         case order : currComponent = <Order navigateTo={this.navigateTo}/>; break;
         case profile : currComponent = <Profile navigateTo={this.navigateTo}/>; break;
         default : break;
      }
      return (
         <AuthContext.Provider value={this.state.user}>
            {currComponent}
         </AuthContext.Provider>
      );
   }
}

export default App;
