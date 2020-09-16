import React from "react";

export default class Demo extends React.Component {
  state = {
    xPos: 0,
    yPos: 0,
    dX: 10,
  };
  componentDidMount() {
    this.ticker = setInterval(this.tick, 300);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    if (prevState.xPos > 272) {
      this.setState({
        dX: -10,
        xPos: 271,
      });
    }
    if (prevState.xPos < 0) {
      this.setState({
        dX: 10,
        xPos: 1,
      });
    }
  }
  tick = () => {
    const { xPos, yPos, dX } = this.state;
    // want to change postion via inline styling
    //    top: "280px", //280
    // left: "0px", //275
    this.setState({
      xPos: xPos + dX,
      // yPos: yPos + 10,
    });
  };
  render() {
    const { xPos, yPos } = this.state;
    return (
      <div style={styles.container}>
        <div style={{ ...styles.dvd, top: yPos, left: xPos }}>dvd</div>
      </div>
    );
  }
}
const styles = {
  dvd: {
    margin: 0,
    padding: 0,
    position: "absolute",
    // top: "0px", //280
    // left: "0px", //275
    // border: "1px solid",
  },
  container: {
    position: "relative",
    width: "300px",
    height: "300px",
    backgroundColor: "grey",
    border: "2px solid",
  },
};
