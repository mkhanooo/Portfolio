import React, { Component } from "react";
import { Zoom } from "react-reveal";
import { Project } from "../../context/Context";
import { Link } from "react-router-dom";
class Projects extends Component {
  showBoxes = () => (
    <Project.Consumer>
      {state => {
        return state.projects.map((el, i) => {
          let title = state.nameToUrl(el.name);
          console.log(title,el.name)
          return (
            <Zoom key={i}>
              <div className="col s4">
                <div className="cardContainer">
                  <div className="cardP">
                    <div className="card__image-container">
                      <img
                        className="card__image"
                        src={
                          el[title] ||
                          "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80"
                        }
                        alt={el.name}
                      />
                    </div>
                    <svg className="card__svg" viewBox="0 0 800 500">
                      <path
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
                        stroke="transparent"
                        fill="#333"
                      />
                      <path
                        className="card__line"
                        d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                        stroke="pink"
                        strokeWidth="3"
                        fill="transparent"
                      />
                    </svg>
                    <div className="card__content">
                      <h1 className="card__title">{el.name}</h1>
                      <div>
                        <div className="button">
                          <Link to={`/projects/${title}`}>
                            View&nbsp;More&nbsp;
                            <span className="shift">›</span>
                          </Link>
                          <div className="mask"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          );
        });
      }}
    </Project.Consumer>
  );
  render() {
    return (
      <div className="row">
        <div className="col s12 center"><h1 style={{fontSize:`7rem`,marginBottom:`10rem`}}>My Work</h1></div>
        {this.showBoxes()}
      </div>
    );
  }
}

export default Projects;
