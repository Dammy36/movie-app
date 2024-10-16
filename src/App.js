import React, { Component } from "react";
import Movie from "./components/movie";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container">
          <Movie />
        </main>
      </div>
    );
  }
}
export default App;
