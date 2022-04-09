import React, { Component } from "react";
const state = {
  cssStart: 0,
  cssEnd: 75,
  jsStart: 0,
  jsEnd: 80,
  reactStart: 0,
  reactEnd: 60,
  materializeStart: 0,
  materializeEnd: 90,
  nodeStart: 0,
  nodeEnd:50
};
class Card extends Component {
  percentage = () => {
    if (state[`${this.props.type}Start`] < state[`${this.props.type}End`]) {
      state[`${this.props.type}Start`]+=1
      document.querySelector(`.${this.props.type}Exp.experiance`).classList.remove("transparent-text");
      this.forceUpdate()
    }
  };
  componentDidUpdate() {setTimeout(this.percentage, 1)}
  render() {
    let type = this.props.type;
    return (
      <div
        onMouseEnter={this.percentage}
        onMouseLeave={() => {
          document.querySelector(`.${type}Exp.experiance`).classList.add("transparent-text");
          state[`${this.props.type}Start`] = 0;
        }}
        className="cardCss"
      >
        <h4 className="title">{type.toUpperCase()}</h4>
        <img src={this.props.src} className={`img ${type}Img`} alt={type} />
        <div className="bar">
          <div className="emptybar"></div>
          <div className={`${type}Bar filledbar`}></div>
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className={`stroke ${type}`} cx="60" cy="60" r="50" />
          </svg>
        </div>
        <div className={`white-text experiance ${type}Exp  transparent-text`}>
          {state[type+"Start"]}%
        </div>
      </div>
    );
  }
}

export default Card;
