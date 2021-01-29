import React from "react";

import "./Login.scss";

class Login extends React.Component {
  state = {
    player1: "",
    player2: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);

    let player = event.target.id;
    this.setState({ [player]: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { player1, player2 } = this.state;
    this.props.names(player1, player2);
  };
  render() {
    return (
      <div className="app-wrapper">
        <div className="app-screen">
          <form>
            <div className="form-players">
              <label> Player1 Name</label>
              <input
                type="name"
                id="player1"
                className="form-control"
                onChange={this.handleChange}
              />
              <label>Player2 Name</label>
              <input
                type="name"
                id="player2"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <button onClick={this.handleClick} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
