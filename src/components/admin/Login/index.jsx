import React, { Component } from "react";
import "./login.css";
import firebase from "../../../config/Firebase";
import { AuthContext } from "../../../context/AuthContext";
class Login extends Component {
  static contextType = AuthContext;
  state = {
    email: "",
    password: ""
  };
  changeColor = (neon, color, defaul, light, isOn) => {
    document.documentElement.style.setProperty("--neon", neon);
    document.documentElement.style.setProperty("--color", color);
    document.documentElement.style.setProperty("--default", defaul);
    document.documentElement.style.setProperty("--light", light);
    document.getElementById("litheader").className = isOn;
  };
  handleSubmit = e => {
    e.preventDefault();
    this.changeColor(
      "#B6FF00",
      "white",
      "#FFbb00",
      "rgba(255, 187, 0,0.8)",
      "poweron"
    );
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.changeColor(
          "royalblue",
          "royalblue",
          "royalblue",
          "rgba(65, 105, 225,0.8)",
          "poweron"
        );
        document.getElementById("litheader").className = "poweron";
        setTimeout(()=> this.props.history.push(`/admin/${this.context.pageId}`),5000)
      })
      .catch(error => {
        this.changeColor("red", "red", "red", "rgba(225, 0, 0,0.8)", "poweron");
      });
    this.setState({ email: "", password: "" });
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  componentWillUnmount() {
    this.changeColor(
      "#B6FF00",
      "white",
      "#FFbb00",
      "rgba(255, 187, 0,0.8)",
      ""
    );
  }
  render() {
    return (
      <div style={{ backgroundColor: `#333`, width: `100%`, height: `100vh` }}>
        <form
          id="accesspanel"
          onSubmit={this.handleSubmit}
          action="/"
          method="post"
        >
          <h1 id="litheader">ADEEB AHMAD</h1>
          <div className="inset">
            <p>
              <label htmlFor="email">Email</label>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                autoComplete="off"
                id="email"
                placeholder="Email"
              />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                id="password"
                placeholder="Password"
              />
            </p>
          </div>
          <div className="button btn-btn" style={{ margin: `0 auto` }}>
            <button>
              Login
              <span className="shift">›</span>
            </button>
            <div className="mask"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
