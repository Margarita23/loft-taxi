import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.scss';

import Login from './pages/login/login';
import Reg from './pages/reg/reg';


class App extends Component {
   state = { currentPage: this.props.initialPage };
   
   navigateTo = (page) => {
      this.setState({ currentPage: page});
      
      if(page === 'login') {
         return this.Component = <Login navigateTo={this.navigateTo}/>;
      } else if(page === 'reg') {
         return  this.Component = <Reg navigateTo={this.navigateTo}/>;
      }
   }
   
   Component = <Login navigateTo={this.navigateTo}/>;

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
