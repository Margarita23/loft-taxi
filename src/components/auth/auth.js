import React from "react";
import authContext from "./auth-context";

import SignIn from "../../pages/signin/signin";

class Auth extends React.Component {

    state = {
        isLoggedIn: false,
        login: this.login.bind(this),
        logout: this.logout.bind(this)
    }

    login(email, password){
        console.log("email - " + email);
        console.log("password - " + password);
        this.setState({isLoggedIn: true});
    }

    logout() {
        this.setState({isLoggedIn: false});
    }

    show(){
        if(this.state.isLoggedIn){
            return <>{this.props.children}</>;
        } else {
            return <SignIn navigateTo={this.props.navigateTo}/>
        }
    }

    render() {
        return(
            <authContext.Provider value={this.state}>
                {this.show()}
            </authContext.Provider>
        )
    }
}

export default Auth;