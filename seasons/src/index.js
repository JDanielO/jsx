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

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
