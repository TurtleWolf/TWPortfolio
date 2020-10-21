import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">dev.TurtleWolfe@gmail.com</h1>
          <img
            src="https://app.codeship.com/projects/ce086d20-209f-0136-fda2-1a0f937aee5f/status?branch=master"
            alt="codeship status"
          />
        </header>
        <div className="container">
          <div className="z-depth-2">
            <img
              className="backcolored"
              src="img/cssGRID/code_igniter.png"
              alt="code_igniter.png"
            />
          </div>
          <div className="vertical z-depth-2">
            <img src="img/cssGRID/matrix.gif" alt="matrix.gif" />
          </div>
          <div className="horizontal z-depth-2">
            <img src="img/cssGRID/mysql.png" alt="mysql.png" />
          </div>
          <div className="z-depth-2">
            <img src="img/cssGRID/mongodb.jpg" alt="mongodb.jpg" />
          </div>
          <div className="z-depth-2 backcolored">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="big z-depth-2">
            <img src="img/cssGRID/images.jpg" alt="coding screen" />
          </div>
          <div className="z-depth-2">
            <img
              alt="base64"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div className="backcolored vertical z-depth-2">
            {" "}
            <ul>
              <li>
                <a href="https://codepen.io/TurtleWolf/">
                  <i className="fa fa-codepen" aria-hidden="true" /> CodePen
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/groups/266866570176327/">
                  <i className="fa fa-facebook-official" aria-hidden="true" />{" "}
                  DangerousMinds
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/turtlew0lf">
                  <i className="fa fa-facebook-official" aria-hidden="true" />{" "}
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/turtlewolf">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />{" "}
                  FreeCodeCamp
                </a>
              </li>
              <li>
                <b>
                  <a href="https://github.com/TurtleWolf">
                    <i className="fa fa-github" aria-hidden="true" /> GitHub/TW
                  </a>
                </b>
              </li>
              <li>
                <a href="https://plus.google.com/+JonathanPohlner">
                  <i className="fa fa-google-plus" aria-hidden="true" />{" "}
                  GooglePlus/JP
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/turtle-wolfe-87796377/">
                  <i className="fa fa-linkedin" aria-hidden="true" />{" "}
                  LinkedIn/TW
                </a>
              </li>
              <li>
                <strong>
                  <a
                    href="https://www.twitch.tv/turtlewolfe"
                    className="bg-faded text-muted"
                  >
                    <i className="fa fa-twitch" aria-hidden="true" />{" "}
                    Twitch.tv/TW
                  </a>
                </strong>
              </li>
              <li>
                <a href="https://twitter.com/JonPohlner?lang=en">
                  <i className="fa fa-twitter" aria-hidden="true" /> Twitter/JP
                </a>
              </li>
              <li>
                <strong>
                  <a href="https://www.youtube.com/playlist?list=PLETG2T1KvnioI_uRwEx1-efEI6EpoN_ZR">
                    <i className="fa fa-youtube-play" aria-hidden="true" />{" "}
                    YouTube/TW
                  </a>
                </strong>
              </li>
            </ul>
          </div>
          <div className="z-depth-2">
            <img alt="freecodecamp.png" src="img/cssGRID/freecodecamp.png" />
          </div>
          <div className="horizontal z-depth-2">
            <img src="img/cssGRID/matrix.gif" alt="matrix.gif" />
          </div>
          <div className="z-depth-2">
            <img
              className="backcolored"
              src="img/cssGRID/git.png"
              alt="git.png"
            />
          </div>
          <div className="big z-depth-2">
            <img src="img/cssGRID/code.jpg" alt="code.jpg" />
          </div>
          <div className="z-depth-2">
            <img src="img/cssGRID/nodejs-logo.png" alt="nodejs-logo.png" />
          </div>
          <div className="horizontal z-depth-2">
            <img
              className="backcolored"
              src="img/cssGRID/php.png"
              alt="php.png"
            />
          </div>
          <div className="z-depth-2">
            <img src="img/cssGRID/unity.png" alt="unity.png" />
          </div>
          <div className="big z-depth-2">
            <img src="img/cssGRID/cssgrid.png" alt="cssgrid.png" />
          </div>
          <div className="z-depth-2">
            <img src="img/cssGRID/matrix.gif" alt="matrix.gif" />
          </div>
          <div className="vertical z-depth-2">
            <img src="img/cssGRID/html5.jpg" alt="html5.jpg" />
          </div>
          <div className="z-depth-2">
            <img src="img/cssGRID/matrix.gif" alt="matrix.gif" />
          </div>
          <div className="z-depth-2">
            <img src="img/cssGRID/tddguilty.png" alt="tddguilty.png" />
          </div>
          <div className="z-depth-2">
            <img src="img/cssGRID/matrix.gif" alt="matrix.gif" />
          </div>
        </div>
        <a href="https://github.com/TurtleWolf/TWPortfolio" target="blank">
          <h6 className="App-title css-text-shadow">
            {"source code: https://github.com/TurtleWolf/TWPortfolio "}
          </h6>
        </a>
      </div>
    );
  }
}

export default App;
