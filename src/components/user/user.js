import {Component} from "react";

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            password: ""
        }
    }

    create(newUser) {
        console.log(newUser);
        return true;
    }
    
    signIn(user){
        console.log(user);
        return true;
    }
}

export default User;