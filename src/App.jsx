import Home from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./resources/styles.css";
import Context from "./context/Context";
import Details from "./components/details";
import Login from "./components/admin/Login";
import AuthContextProvider, { AuthContext } from "./context/AuthContext";
import Panel from "./components/admin/AddNew/Panel";
import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
      window.addEventListener("load",()=>{
        document.querySelector(".preloader h2").style.opacity = 0;
      setTimeout(() => {
        document.querySelector(".preloader").classList.add("done");
      }, 500);
      })
  }
  render() {
    return (
      <AuthContextProvider>
        <AuthContext.Consumer>
          {(authContext) => {
            return (
              <Context>
                <BrowserRouter>
                  <div className="App">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/admin/login" component={Login} />
                      <Route
                        exact
                        path={`/admin/${authContext.pageId}`}
                        component={Panel}
                      />
                      <Route path="*" component={Home} />
                    </Switch>
                    <Route path="/projects" component={Home} />
                    <Route path="/projects/:project" component={Details} />
                  </div>
                </BrowserRouter>
              </Context>
            );
          }}
        </AuthContext.Consumer>
      </AuthContextProvider>
    );
  }
}

export default App;
