import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Compteur from "./Compteur";

class App extends React.Component {
  state = {
    fullName: "GoMyCode",
    bio: "My name is Mohamed oueslati. I'm a full stack web developer",
    imgSrc: "fullstack.webp",
    profession: "Web Developer",
    show: false,
  };
  // method is used to toggle the show property in the component's state
  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )}
        <Button variant="info" onClick={this.handleShow}>
          {!this.state.show ? "Show" : "Hide"}
        </Button>
        <>
          <h1>Show the count</h1>
          <Compteur />
        </>
      </div>
    );
  }
}

export default App;
