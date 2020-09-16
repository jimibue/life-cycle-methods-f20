import React from "react";
import "./App.css";
import { Button, Container } from "semantic-ui-react";
import Clock from "./Clock";

class App extends React.Component {
  state = { showClock: true };

  render() {
    const { showClock } = this.state;
    return (
      <Container style={styles.container}>
        {showClock && <Clock />}
        <Button onClick={() => this.setState({ showClock: !showClock })}>
          {showClock ? "hide clock" : "show clock"}
        </Button>
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
