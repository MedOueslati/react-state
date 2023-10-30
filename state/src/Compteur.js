import React from "react";
import Button from "react-bootstrap/Button";

class Compteur extends React.Component {
  constructor() {
    super();
    // store and manage data 
    this.state = {
      count: 0,
    };
    console.log("constructor");
  }
  // uses the arrow function syntax to define the method
  Increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  Decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  // lifecycle method in React. , function is used to create a recurring timer
  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);

    console.log("componentDidMount", interval);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    if (this.state.count < 10) {
      clearInterval(this.interval);
    }
  }
  render() {
    return (
      <div>
        <Button variant="success" onClick={() => this.Increment()}>
          +
        </Button>
        COUNT: {this.state.count}
        <Button variant="danger" onClick={() => this.Decrement()}>
          -
        </Button>
      </div>
    );
  }
}

export default Compteur;
