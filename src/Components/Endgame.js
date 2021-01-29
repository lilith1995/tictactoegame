import React from "react";

class Endgame extends React.Component {
  state = {
    tied: " Guys, you tied!!!",
    playerWin: "Congrats " + this.props.winner + ", You Won the Game!!!",
  };
  handleClick = () => {
    this.props.endgame(false);
  };
  render() {
    const { winner } = this.props;
    const { tied, playerWin } = this.state;
    return (
      <div className="app-layout">
        <div className="app-screen">
          <p> {winner === "Tied" ? tied : playerWin} </p>
          <button className="btn btn-submit" onClick={this.handleClick}>
            Wanna play again?
          </button>
        </div>
      </div>
    );
  }
}

export default Endgame;
