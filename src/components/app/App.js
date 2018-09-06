import React          from "react";
import { Component }  from "react";

import axios          from "axios";

import Navigation     from '../navigation/Navigation'

import EvilError      from '../EvilError';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // url: 		'https://www.settlersonline.com',
      // url:     "https://www.diesiedleronline.de",
      // url:     "http://www.thorsten-bruening.de",
      url:        "http://www.facebook.de",
      player: 		"",
      pass: 			"",
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
        console.log("Axios->response: ",response);
      })
      .catch(function(error) {
        console.log("Axios->error: ",error);
      });

    return (
      <div className="App">
      <Navigation />

        Fehler!!!
        <br />
        <br />
        <EvilError />
        <br />
        <br />
        See console.log...
      </div>
    )
  }
}

export default App;
