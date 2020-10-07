import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    //only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" }; // initialize the state object

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called set setState!!!!!!
        this.setState({ lat: [position.coords.latitude] });
      },

      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidMount() {
    console.log("My component was rendereed to the screen");
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
