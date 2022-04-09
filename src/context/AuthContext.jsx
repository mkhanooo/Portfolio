import React, { Component, createContext } from "react";

import firebase from "../config/Firebase";

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
    user: {},
    pageId: Math.random().toString(36).substr(2,10),
    updateRoute: ()=>{
      this.setState({pageId: Math.random().toString(36).substr(2,10)})
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      user
       ? this.setState({ isAuthenticated: true, user }) 
       : this.setState({ isAuthenticated: false, user: {} });
    });
  };
  render() {
    return (
      <AuthContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
