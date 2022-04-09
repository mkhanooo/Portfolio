import { Project } from "../../context/Context";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import { Bounce } from "react-reveal";
class Highlights extends Component {
  render() {
    return (
      <Project.Consumer>
        {state => {
          const projects = state.projects;
          let index = projects.findIndex(el => {
            let project = state.nameToUrl(el.name).toLowerCase();
            document.body.classList.add("overflow-hidden");
            return this.props.match.params.project === project;
          });
          let prevPrject;
          if (index - 1 >= 0) {
            prevPrject = state.nameToUrl(projects[index - 1].name);
          }
          let nextProject;
          if (index + 1 < projects.length) {
            nextProject = state.nameToUrl(projects[index + 1].name);
          }
          return (
              <Bounce left>
            <div className="outer-div">
                <Link to="/" className="spread">
                  <ArrowBackSharpIcon
                    style={{ fontSize: `3rem` }}
                    className="prev-arrow white-text"
                  />
                </Link>
                {prevPrject ? (
                  <Link to={`/projects/${prevPrject}`}>
                    <KeyboardArrowLeftIcon
                      className="arrows back-arrow black-text"
                      fontSize="large"
                    />
                  </Link>
                ) : (
                  ``
                )}
                {nextProject ? (
                  <Link to={`/projects/${nextProject}`}>
                    <KeyboardArrowRightIcon
                      className="arrows next-arrow black-text"
                      fontSize="large"
                    />
                  </Link>
                ) : (
                  ``
                )}

                <div className="inner-div">
                  <div className="row">
                    <div className="img-container col l7">
                      <a
                        target="_blank"
                        href={projects[index].link}
                        className="img-cont"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="info-img"
                          src={projects[index][this.props.match.params.project]}
                          alt={projects[index].name}
                        />
                      </a>
                    </div>
                    <div className="content-outer col l5">
                      <div className="content-inner">
                        <h1 className="project-heading white-text">
                          {projects[index].name}
                        </h1>
                        <div className="project-content white-text">
                          {projects[index].description}
                        </div>
                        <div className="button">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={projects[index].link}
                          >
                            Visit&nbsp;Site&nbsp;
                            <span className="shift">›</span>
                          </a>
                          <div className="mask"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              </Bounce>
          );
        }}
      </Project.Consumer>
    );
  }
}

export default Highlights;