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

    return <div className="App">Hallo!</div>;
  }
}

export default App;
