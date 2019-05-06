import React from "react";

function HighScore(props) {
  return (
    <nav className="navbar">
      <span className="navbar-brand">
        <h1 className="ml-5">
          Clicky Game
        </h1>
      </span>

      <div className="text-center">
        <h2>Click a picture! But don't click it more than once. Try and get to 15!</h2>
      </div>
      <div>
        <h3>
          Current Score: {props.currentScore}
        </h3>
      </div>
      <div>
        <h3>
          High Score: {props.highScore}
        </h3>
      </div>
    </nav>
  );
}

export default HighScore;