import React from "react";

function HighScore(props) {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/home">
        <h2 className="ml-5">
          Clicky Game
        </h2>
      </a>

      <div className="text-center">
        Click a picture! But don't click it more than once. Try and get to 15!
      </div>

      <div>
        Current Score: {props.currentScore}
      </div>
      <div>
        High Score: {props.highScore}
      </div>
    </nav>
  );
}

export default HighScore;