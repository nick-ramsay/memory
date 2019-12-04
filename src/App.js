import React, { Component } from 'react';
import ImageCard from "./components/ImageCard/ImageCard";
//import logo from './logo.svg';
import './App.css';
import images from "./image.json";

var imageOptions = images;
var chosenImageNumber;

class App extends Component {

  state = {
    imageOptions
  }

  shuffleImages(){}

  render() {
    return (
      <div className="App">
        <nav className="navbar" class="navbar navbar-dark bg-dark">
          <a href="/" className="headerTitle"><h2>Memory!</h2></a>
          <h3 className="headerDetails">Click an image to begin!</h3>
          <h3 className="headerDetails">Score: <span>[SCORE]</span> | Top Score: <span>[TOPSCORE]</span></h3>
        </nav>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Memory!</h1>
            <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
        </div>
        <div class="container">

          {this.state.imageOptions.map(image => (
            <ImageCard
              id={image.id}
              src={image.image}
            />

          ))
          }
        </div>
        <footer class="fixed-bottom">
          <a href="/" className="headerTitle"><h6>Memory!</h6></a>
        </footer>
      </div>
    );
  }
}

export default App;
