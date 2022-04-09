import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll'
const SideDrawer = (props) => {
  const scrollToElement =(el)=>{
    scroller.scrollTo(el, {
      duration: 1500,
      delay: 100,
      smooth: true
    })
    props.onClose(false)
  }
  const outerStyle={width: `250px`,height: `60px`}
  const innerStyle={width: `40px`, height: `10px`}
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={()=>{props.onClose(false)}}>
        <List component="div" >
          <ListItem style={outerStyle} button onClick={()=> {scrollToElement('about')}}>
            <span style={innerStyle}></span>
            About
          </ListItem>
          <ListItem style={outerStyle} button onClick={()=> {scrollToElement('projects')}}>
            <span style={innerStyle}></span>
            My Projects
          </ListItem>
          <ListItem style={outerStyle} button onClick={()=> {scrollToElement('experiance')}}>
            <span style={innerStyle}></span>
            Experiance
          </ListItem>
          <ListItem style={outerStyle} button onClick={()=> {scrollToElement('contact')}}>
            <span style={innerStyle}></span>
            Contact
          </ListItem>
          <ListItem style={outerStyle} button onClick={()=> {scrollToElement('location')}}>
            <span style={innerStyle}></span>
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;