import React from "react";
import images from "./images.json";
import Wrapper from "./components/Wrapper/wrapper"
import HighScore from "./components/HighScore/highScore";
import Images from "./components/Image/image";
import "./App.css";

class App extends React.Component {
  // onclick of image check to see if the ID is in the array and then

  // if the image id is not in the array add 1 to the score
  // change high score to the number

  // if the image id is in the array start game over and change text 
  // to say that you guessed incorrectly and its time to start over
  state = {
    images,
    clickedImage: [],
    highScore: 0,
    currentScore: 0,
  };
  handleShuffle() {
    this.setState({
      images: images.sort(() => Math.random() - 0.5)
    });
  };
  handleGuess(id) {
    if (!this.state.clickedImage.includes(id)) {
      this.setState({
        currentScore: this.state.currentScore + 1,
        clickedImage: [...this.state.clickedImage, id],
        highScore: this.state.currentScore + 1 > this.state.highScore ? this.state.currentScore + 1 : this.state.highScore
      });
    } else {
      alert("You guessed incorrectly! Game is starting over!")
      this.setState({
        currentScore: 0,
        clickedImage: []
      });
    }
    this.handleShuffle();
  }
  render() {
    return (
      <>
        <Wrapper>
          <div className="container">
            <HighScore highScore={this.state.highScore} currentScore={this.state.currentScore} />
          </div>
          <div className="container">
            {this.state.images.map(card => (
              <Images
                id={card.id}
                key={card.id}
                img={card.img}
                clickHandler={() => this.handleGuess(card.id)}
              />
            ))}
          </div>
        </Wrapper>
      </>
    );
  }
}
export default App;
