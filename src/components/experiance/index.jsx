import React from "react";
import Card from "./card";
import img1 from "../../resources/images/css.png";
import img2 from "../../resources/images/js.png";
import img3 from "../../resources/images/react.png";
import img4 from "../../resources/images/materialize.png";
import img5 from "../../resources/images/node.png";
import { Bounce } from "react-reveal";
const Experiance = (props) => {
  return (
    <div style={{ width: `100%`, height: `${window.innerHeight}px` , paddingTop:`50px`}} className="a">
      <Bounce left>
        <div className="container" style={{width:`80%`}}>
        <h1 style={{fontSize:`7rem`}}>Experiance</h1>
        </div>
        <div className="containerCard">
          <Card src={img1} type="css" />
          <Card src={img2} type="js" />
          <Card src={img3} type="react" />
          <Card src={img4} type="materialize" />
          <Card src={img5} type="node" />
        </div>
      </Bounce>
    </div>
  );
};

export default Experiance;
