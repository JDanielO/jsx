import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    //only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" }; // initialize the state object
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: [position.coords.latitude] }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just re-updated! It re-rendered. ");
  }

  render() {
    if (this.state.errorMessageMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessageMessage && this.state.lat) {
      return <div> Latitude: {this.state.lat}</div>;
    }
    return <div> Loading! </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
