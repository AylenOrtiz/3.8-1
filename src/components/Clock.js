import React from "react";

class Clock extends React.Component {
  componentDidMount() {
    this.intervalo = setInterval(this.updateClock, 1000);
  }
  constructor(props) {
    super(props);
    this.state = {
      hora: 0,
      min: 0,
      second: 0,
      time: ""
    };
    this.updateClock = this.updateClock.bind(this);
  }

  updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    this.setState({
      hour: hours,
      min: minutes,
      second: seconds
    });
  }
  render() {
    return (
      <div clasName="container">
        <h1 clasName="myClock">
          {this.state.hour} :
          {this.state.min} :
          {this.state.second}
        </h1>
      </div>
    );
  }
}

export default Clock;
