import React from "react";
import "./App.css";
import { Button, Container } from "semantic-ui-react";
import Clock from "./Clock";
import Data from "./Data";

class App extends React.Component {
  state = { showClock: true, showData: true };
  toggleData = () => {
    this.setState({
      showData: !this.state.showData,
    });
  };
  render() {
    const { showClock, showData } = this.state;
    return (
      <Container style={styles.container}>
        {showClock && <Clock />}
        <Button onClick={() => this.setState({ showClock: !showClock })}>
          {showClock ? "hide clock" : "show clock"}
        </Button>
        {showData && <Data />}
        <Button onClick={this.toggleData}>toggle Data</Button>
      </Container>
    );
  }
}

const styles = {
  container: {
    paddingTop: "30px",
  },
};

export default App;
