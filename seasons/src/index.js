import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    //only time we do direct assignment to this.state
    this.state = { lat: null }; // initialize the state object

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called set setState!!!!!!
        this.setState({ lat: [position.coords.latitude] });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
