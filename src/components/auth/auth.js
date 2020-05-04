import React from "react";
import authContext from "./auth-context";

import SignIn from "../../pages/signin/signin";

class Auth extends React.Component {

    state = {
        auth: false,
        login: this.login.bind(this),
        logout: this.logout.bind(this)
    }

    login(){
        this.setState({auth: true});
    }

    logout() {
        this.setState({auth: false});
    }

    show(){
        if(this.state.auth){
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