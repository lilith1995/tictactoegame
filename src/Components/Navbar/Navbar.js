import React from "react";

import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    const { player1, player2, ties, userName1, userName2 } = this.props;
    return (
      <div className="game-navbar">
        <div className="game-title">
          <h1>Let's play Tic Tac Toe</h1>
        </div>
        <div className="game-statistics">
          <h2>
            {userName1} : {player1}
          </h2>
          <h2>
            {userName2} : {player2}
          </h2>
          <h2>Ties: {ties}</h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
