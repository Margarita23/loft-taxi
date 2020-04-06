import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.scss';

import Login from './pages/login/login';
import Header from './components/header/header';
import Profile from './pages/profile/profile';


class App extends Component {
   render() {
      return (
         <>
            <Login/>
            <Header/>
            <Profile/>
         </>
      );
   }
}

export default App;
