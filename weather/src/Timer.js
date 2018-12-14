import React, { Component } from "react";

class Timer extends Component
{
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>
          Тааймер: Дни: {Math.floor(this.state.seconds / 24)} Часы:{" "}
          {this.state.seconds % 24}{" "}
        </h3>
        <button onClick={() => (this.state.seconds += 24)}>
          Добавить сутки
        </button>
      </div>
    );
  }
}
export default Timer;