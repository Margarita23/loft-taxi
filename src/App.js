import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.scss';

import Login from './pages/login/login';
import Reg from './pages/reg/reg';

const PAGES = {
   login: <Login/>,
   reg: <Reg/>,
}


class App extends Component {
   state = { currentPage: this.props.initialPage };

   navigateTo = (page) => {
      this.setState({ currentPage: `${page}`});
      console.log("ABSOLUTLY!!! + " + page);
   }

   render() {
      return (
         <>
            {this.props.pages[`${this.state.currentPage}`]}
            <Reg></Reg>
         </>
      );
   }
}

App.defaultProps = {
   pages: PAGES,
   initialPage: "login",
};

export default App;
