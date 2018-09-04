import React from "react";
import { Component } from "react";

import axios from "axios";
// Url:				https://diesiedleronline.de
// Welt:			Mittsommerstadt
// Spieler:		MorbusBanane
// Pass:			<ASCII 3F><Spieler><ASCII 3F>
// Avatar:		Typ mit Roter Mütze (Webkit-Avatar18)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // url: 		'https://www.settlersonline.com',
      url:        "https://www.diesiedleronline.de",
      player: 		"MorbusBanane",
      pass: 			"?MorbusBanane?",
      step1: 			false,
      step2: 			false,
      step3: 			false,
      isLoggedIn: false
    };
  }

  render() {
    axios
      .get(this.state.url)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    return (
      <div className="App">
        Fehler!!!
        <br />
        <br />
        Failed to load
        https://www.diesiedleronline.de/:
        Redirect from 'https://www.diesiedleronline.de/' to 'https://www.diesiedleronline.de/de'
        has been blocked by CORS policy:
        The 'Access-Control-Allow-Origin' header has a value 'https://www.diesiedleronline.de'
        that is not equal to the supplied origin. Origin 'http://localhost:3000' is therefore not allowed access.
        App.js:33 Error: Network Error
          at createError (createError.js:16)
          at XMLHttpRequest.handleError (xhr.js:87)
        <br />
        <br />
        See console.log...
      </div>
    )
  }
}

export default App;
