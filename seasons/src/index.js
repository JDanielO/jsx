import React from "react";
import ReactDOM from "react-dom";

<<<<<<< HEAD
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
=======
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <div>Latitude: </div>;
};

class App extends React.Component {
  render() {
    return <div>Latitude: </div>;
>>>>>>> 7b82b45a752c291540facbf848a86453b62cfb4e
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
