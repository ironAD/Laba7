import React, { Component } from "react";

class Roll extends Component 
{
  constructor(props) {
    super(props);
    this.state = { roll: 0 };
  }
  roll() {
    this.setState(state => ({
      roll: state.roll
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.roll(), 10);
  }

  render() {
    return (
      <div>
        <h3>Рандом от 1-100: {this.state.roll}</h3>
        <button onClick={() => (this.state.roll = Math.floor(Math.random() * (100 - 1 + 1)) + 1)}>Жмякай</button>
      </div>
    );
  }
}
export default Roll;