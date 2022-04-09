import React, { Component, createContext } from "react";
import budgety from "../resources/images/budgety.png";
import todo from "../resources/images/todo.png";
import the_venue from "../resources/images/the_venue.png";
import laptop_store from "../resources/images/laptop_store.png";
import simon_game from "../resources/images/simon_game.png";
import dice_game from "../resources/images/dice_game.png";
import forkify from "../resources/images/forkify.png";
import color_game from "../resources/images/color_game.png";
import wack_a_mole from "../resources/images/wack_a_mole.png";
import style_changer from "../resources/images/style_changer.png";
import cv_site from "../resources/images/cv_site.png";
import universe from "../resources/images/universe.png";
import tindog from "../resources/images/tindog.png";
import jquery_todo from "../resources/images/jquery_todo.png";
import press_kit from "../resources/images/press_kit.png";
import canvas from "../resources/images/canvas.png";
import speech_detection from "../resources/images/speech_detection.png";
import speech_synthsis from "../resources/images/speech_synthsis.png";
import cyber_store from "../resources/images/cyber_store.png";
import flex_panels from "../resources/images/flex_panels.png";
export const Project = createContext();
class Context extends Component {
  state = {
    projects: [
      // {
      //   name: "Forkify",
      //   forkify,
      //   description: `Forkify is a real world project. It fetch and display food recipe data through API. It also uses Babel (To convert ES6 to ES5) & Webpack (To bundle Javascript module) . `,
      //   link: `https://forkify-by-adeeb-ahmad.netlify.com`
      // },
      // {
      //   name: "The Venue",
      //   the_venue,
      //   description: `Venue is a ReactJS project that has a carousel and a timer countdown. It uses different React libraries like react-scroll(To go to desired Element),react-reveal(For different type of animations) & react-slick(For carousel) `,
      //   link: `https://the-venue-by-adeeb.surge.sh/`
      // },
      // {
      //   name: "Budgety",
      //   budgety,
      //   link: `https://adeebahmad1.github.io/budgety/`,
      //   description: `Budgety allow us to add incomes and expenses of a cretain month. This allows us to add and remove income and expenses and then store them into local storage to save your data.`
      // },
      // {
      //   name: "Laptop Store",
      //   laptop_store,
      //   link: `https://laptop-store-1.herokuapp.com/`,
      //   description: `Laptop store is a Node JS. This contains the product data in JSON format. Products and their ids. This module uses some builtin node modules like HTTP & FS.This project has two routes laptop and products.`
      // },
      // {
      //   name: "Cyber Store",
      //   cyber_store,
      //   link: `https://adeebahmad1.github.io/the_cyber_store/`,
      //   description: `Cyber store is a complete store where you can sighup and create your account you can create your own products you can add products to cart and you can edit your products details. You can edit your details . All of this is done with local storage`
      // },
      // {
      //   name: "Color Game",
      //   color_game,
      //   link: `https://rgb-color-game-by-adeeb-ahmad.netlify.com`,
      //   description: `This game is built on Javascript . It automatically generates three different numbers of colors and randomly it presents 6 colors to us. This game also has three difficulty levels(Easy,Medium,Hard)`
      // },
      // {
      //   name: "Universe",
      //   universe,
      //   link: `https://universe-by-adeeb-ahmad.netlify.com`,
      //   description: `This is a simple website build on only HTML & CSS. This website contains different type of animations ,cards and Pure CSS Popups. It also contain a unique nav`
      // },
      // {
      //   name: "Todo",
      //   todo,
      //   link: `https://adeebahmad1.github.io/localStorage-Todo/`,
      //   description: `ToDo is Built on pure javascript(ES6),This todo require 3 inputs(Title,Description& Time). Then you can edit ,delete & Mark your todos . This todo store your data to local storage .Then it takes you to new route to display your todos`
      // },
      // {
      //   name: "Press Kit",
      //   press_kit,
      //   link: `https://dream-dbaca.firebaseapp.com/`,
      //   description: `This is a portfolio of a singer of Pakistan.It is responsive and according to the user interface needs.Totally devolved on Reactjs and pure css.`
      // },
      // {
      //   name: "Tindog",
      //   tindog,
      //   link: `https://tindog-by-adeeb-ahmad.netlify.com`,
      //   description: `Tindog is a full page built on HTML CSS & Bootstrap. It is fully responsive.It has different types of cards and dropdowns`
      // },
      // {
      //   name: "Flex Panels",
      //   flex_panels,
      //   link: `https://adeebahmad1.github.io/30DaysChallenge/Flex%20Panels/`,
      //   description: `Flex Panel is a unique type of gallery.It is fully made on HTML CSS & Javascript. When user click on image It expands and the other contracts to give it space`
      // },
      // {
      //   name: "Wack a mole",
      //   wack_a_mole,
      //   link: `https://adeebahmad1.github.io/30DaysChallenge/30%20-%20Whack%20A%20Mole/`,
      //   description: `A game totally built on javascript . This generates a Mole after random time and then mole appears for random time between 0-1.5sec .The game continues for 15 seconds.Your score is displayed and updated as you click on moles.`
      // },
      // {
      //   name: "Canvas",
      //   canvas,
      //   link: `https://adeebahmad1.github.io/30DaysChallenge/Canvas/`,
      //   description: `It is a HTML CSS and JAVASCRIPT based Website.Canvas tag is used for this purpose.When you start dragging your mouse through the screen the color of the line and width of it start changing when it reaches to last it restarts`
      // },
      // {
      //   name: "Simon Game",
      //   simon_game,
      //   link: `https://simon-game-by-adeeb-ahmad.netlify.com`,
      //   description: `This is a javascript based game. In this firstly when you press any key this games starts and then a specific box blink you need to figure it out then for next box you also have to figure out all previous boxes`
      // },
      // {
      //   name: "Speech Synthsis",
      //   speech_synthsis,
      //   link: `https://adeebahmad1.github.io/30DaysChallenge/23%20-%20Speech%20Synthesis/`,
      //   description: `Speech Synthsis is used to generate a voice from text written in Textarea.This also contain more than one language in which it can speak the given word or phrase`
      // },
      // {
      //   name: "Speech Detection",
      //   speech_detection,
      //   link: `https://adeebahmad1.github.io/30DaysChallenge/20%20-%20Speech%20Detection/`,
      //   description: `Speech Detection detect your voice and convert it into text. It can recogonize words and phrases of different languages and write it on UI.`
      // },
      // {
      //   name: "Dice Game",
      //   dice_game,
      //   link: `https://dice-game-pro-by-adeeb-ahmad.netlify.com`,
      //   description: `Dice game or Pig Game is built on javascript( ES5 ). This is a simple game that takes your name as Player name and display it on screen. Then when you click roll button it rolls a dice and add the score to current score`
      // },
      // {
      //   name: "jQuery Todo",
      //   jquery_todo,
      //   link: `https://todo-initial-by-adeeb-ahmad.netlify.com`,
      //   description: `This todo is made in HTML CSS & JAVASCRIPT(jQuery). In this todo there is only one input this is simple to use. Todo name is enough for adding todo`
      // },
      // {
      //   name: "Style Changer",
      //   style_changer,
      //   link: `https://style-changer-by-adeeb-ahmad.netlify.com`,
      //   description: `Style Changer is a javascript based website. It contains 5 buttons each of them is linked to a specific stylesheet when button is clicked stylesheet is swapped.`
      // },
      // {
      //   name: "CV Site",
      //   cv_site,
      //   link: `https://cv-site-by-adeeb-ahmad.netlify.com`,
      //   description: `This is a CV site made on html and css this contains your basic information in it. You can also write your work in it. There is also a hobies section to describe about your self.`
      // }
    ]
  };
  nameToUrl=(name)=> name.split(' ').join('_').toLowerCase();
  render() {
    return (
      <Project.Provider value={{...this.state,nameToUrl: this.nameToUrl}}>
        {this.props.children}
      </Project.Provider>
    );
  }
}

export default Context;
