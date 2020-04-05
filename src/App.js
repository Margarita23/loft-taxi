import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import Login from './pages/login/login';
import Reg from './pages/reg/reg';



class App extends React.Component {
   render() {
      return (
         <div>
            <Login/>
            <Reg/>
         </div>
      );
   }
}

export default App;
