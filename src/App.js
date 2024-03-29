import React, { Component } from 'react';
import ImageCard from "./components/ImageCard/ImageCard";
//import logo from './logo.svg';
import './App.css';
import images from "./image.json";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

var imageOptions = [];
var chosenImageIndex = [];

var currentScore = 0;
var highScore = 0;
var message = "Click an image to begin!"

var imagesGuessed = [];

class App extends Component {

  state = {
    imageOptions,
    currentScore,
    highScore,
    message
  }

  shuffleImages = () => {
    imageOptions = [];
    chosenImageIndex = [];
    for (let i = 0; chosenImageIndex.length < images.length; i++) {
      let currentChoice;
      currentChoice = Math.floor(Math.random() * Math.floor(images.length));
      if (chosenImageIndex.indexOf(currentChoice) === -1) {
        chosenImageIndex.push(currentChoice);
        imageOptions.push(images[currentChoice]);
      }
    }
    this.setState({imageOptions: imageOptions});
    }

    componentDidMount() {
      this.shuffleImages();
    }

    guessedImage = id => {
      this.shuffleImages();
      if (imagesGuessed.indexOf(id) === -1) {
        imagesGuessed.push(id);
        currentScore += 1;
        this.setState({ currentScore });
        this.setState({ message: "Correct!"})
        if (currentScore > highScore) {
          highScore = currentScore;
          this.setState({ highScore });
          if (imagesGuessed.length === images.length) {
            imagesGuessed = [];
            currentScore = 0;
            highScore = 0;
            this.setState({ currentScore, highScore })
            this.setState({ message: "You win! Play again!"})
          }//This indicates user won game, no images left...
        }
      }// This sets high score if new high score achieved
      else if (imagesGuessed.indexOf(id) !== -1) {
        imagesGuessed = [];
        currentScore = 0;
        this.setState({ currentScore })
        this.setState({ message: "Wrong guess!"})
      } //Wrong guess, start again...
    }

    render() {
      return (
        <div className="App">
          <nav className="navbar" class="navbar fixed-top navbar-dark bg-dark">
            <a href="/"><h2 className="header" id="headerTitle">Memory!</h2></a>
            <h3 className="header" id="headerMessage">{this.state.message}</h3>
            <h3 className="header" id="headerDetails">Score: <span>{this.state.currentScore} | High Score: {this.state.highScore}</span></h3>
          </nav>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Memory!</h1>
              <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
          </div>
          <main>
          <div class="container">
            {this.state.imageOptions.map(image => (
              <ImageCard
                id={image.id}
                src={image.image}
                guessedImage={this.guessedImage}
              />
            ))
            }
          </div>
          </main>
          <footer class="fixed-bottom">
            <a href="/"  id="footerText">Memory!</a>
          </footer>
        </div>
      );
    }
  }

  export default App;
