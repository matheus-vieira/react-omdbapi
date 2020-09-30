import React, { Component } from "react";
import Movie from "./components/movie";

let title = "mandalorian";
let type = "series";

class App extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?t=${title}&type=${type}&apikey=17cb3543`)
      .then((r) => r.json())
      .then((m) => {
        console.log(m);
        this.setState({ movie: m });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div class="container">
        <Movie movie={this.state.movie} />
      </div>
    );
  }
}

export default App;
