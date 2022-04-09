import React, { Component } from "react";
import { AuthContext } from "../../../context/AuthContext";
import firebase /* , { db, storageRef, storage } */ from "../../../config/Firebase";
// import Login from "../Login";
class Panel extends Component {
  static contextType = AuthContext;
  state = {
    title: "",
    link: "",
    image: null,
    description: ""
  };
  handleClick = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.forceUpdate();
      })
      .catch(error => {
        console.error(error);
      });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return <div style={{ backgroundColor: `#333`, width: `100%`, height: `100vh` }}>
      <form
        onSubmit={this.handleSubmit}
        id="accesspanel"
        className="container"
        action="/"
        method="post"
        style={{
          height: `max-content`,
          paddingBottom: `40px`,
          marginTop: `100px`
        }}
      >
        <h1 id="litheader">ADD NEW PROJECT</h1>
        <div className="inset row">
          <p className="col s6">
            <label htmlFor="text">Title</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.title}
              autoComplete="off"
              id="title"
              placeholder="Title"
            />
          </p>
          <div className="col s6">
            <label htmlFor="link">Link</label>
            <input
              onChange={this.handleChange}
              value={this.state.link}
              type="url"
              id="link"
              placeholder="Link of Project"
            />
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <label
              htmlFor="file"
              style={{ margin: `auto`, marginTop: `0px`, display: `inline` }}
            >
              <div
                className="button btn-btn"
                style={{ margin: `auto`, marginTop: `0px` }}
              >
                <div>
                  Upload File &nbsp;
                  <span className="shift">›</span>
                </div>
                <div className="mask"></div>
              </div>
            </label>
            <input type="file" id="file" style={{ display: `none` }} />
          </div>
          <div className="col s6">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={this.handleChange}
              value={this.state.description}
              placeholder="Description"
              id="description"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col s6"></div>
          <div className="col s6"></div>
        </div>
        <div className="button btn-btn" style={{ margin: `0 auto` }}>
          <button>
            Add New Project &nbsp;
            <span className="shift">›</span>
          </button>
          <div className="mask"></div>
        </div>
      </form>
      <div
        className="button btn-btn"
        style={{ marginTop: 0 }}
        onClick={this.handleClick}
      >
        <div>
          Logout &nbsp;
          <span className="shift">›</span>
        </div>
        <div className="mask"></div>
      </div>
    </div>;
  }
}

export default Panel;
