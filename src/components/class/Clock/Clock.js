import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString([], {timeStyle: 'short'}),
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString([], {timeStyle: 'short'})
    });
  }

  render() {
    return (
      <div style={{ width: '100%', textAlign: 'right', }}>
        Сейчас: {this.state.time}.
      </div>
    )
  }
}

export default Clock;
