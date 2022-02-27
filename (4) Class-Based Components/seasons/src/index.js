import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    // geolocation API
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // success callback
        console.log(position);
      },
      (err) => {
        // failure callback
        console.log(err);
      }
    );
    return <div>Latitude!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
