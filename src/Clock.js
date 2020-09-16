import React from "react";

class Clock extends React.Component {
  state = { date: new Date() };
  constructor(props) {
    super(props);
    console.log("constructor called");
  }
  tick = () => {
    this.setState({ date: new Date() });
  };

  componentDidMount() {
    console.log("mounted");
    this.ticker = setInterval(this.tick, 1000);
  }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("compentDidUpdate");
  //   // console.log(this.state);
  //   // console.log(prevProps);
  //   // console.log(prevState);
  // }

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.ticker);
    // any cleanup we want to do do in this method
  }
  render() {
    // console.log("render");
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
