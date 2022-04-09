import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
import { Element } from "react-scroll";
class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll)
  }
  handleScroll = () => {
    if (window.scrollY > 30) {
      this.setState({
        headerShow: true
      });
      if(this.refs.header){
        this.refs.header.classList.add("transparent")
      }
    }else {
      if(this.refs.header){
        this.refs.header.classList.remove("transparent");
      }
      this.setState({
        headerShow: false
      });
    }
    if (window.scrollY > 6000) {
      if(this.refs.header){
        this.refs.header.classList.remove("transparent");
      }
      this.setState({
        headerShow: false
      });
    }
  };

  toggleDrawer = val => {
    this.setState({
      drawerOpen: val
    });
  };
  render() {
    return (
      <Element name="header">
        <AppBar position="fixed" ref="header" className="scroll">
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_venue">
                Muhammad Khan
              </div>
              <div className="header_logo_title">A Website Developer</div>
            </div>
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => {
                this.toggleDrawer(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            <SideDrawer
              open={this.state.drawerOpen}
              onClose={e => this.toggleDrawer(e)}
            />
          </Toolbar>
        </AppBar>
      </Element>
    );
  }
}

export default Header;
